import type { Menu, MenuModule } from '/@/router/types';
import type { RouteRecordNormalized } from 'vue-router';

import { useAppStoreWithOut } from '/@/store/modules/app';
import { usePermissionStore } from '/@/store/modules/permission';
import { transformMenuModule, getAllParentPath } from '/@/router/helper/menuHelper';
import { filter } from '/@/utils/helper/treeHelper';
import { isUrl } from '/@/utils/is';
import { router } from '/@/router';
import { PermissionModeEnum } from '/@/enums/appEnum';
import { pathToRegexp } from 'path-to-regexp';

// import { useUserStore } from '/@/store/modules/user';
import { unreadCustomerStatus } from '/@/views/admin/customer/list/unreadCustomerStatus';
import { unreadFlowStatus } from '/@/views/admin/approval/review/unreadFlowStatus';
import { useBacklogCard } from '/@/views/dashboard/workbench/components/useBacklogCard';

import { useUserStore } from '/@/store/modules/user';

const modules = import.meta.globEager('./modules/**/*.ts');

const menuModules: MenuModule[] = [];

// const userStore = useUserStore();
// const userinfo = computed(() => userStore.getUserInfo);

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  menuModules.push(...modList);
});

// debugger;

// ===========================
// ==========Helper===========
// ===========================

const getPermissionMode = () => {
  const appStore = useAppStoreWithOut();
  return appStore.getProjectConfig.permissionMode;
};
const isBackMode = () => {
  return getPermissionMode() === PermissionModeEnum.BACK;
};

const isRouteMappingMode = () => {
  return getPermissionMode() === PermissionModeEnum.ROUTE_MAPPING;
};

const isRoleMode = () => {
  return getPermissionMode() === PermissionModeEnum.ROLE;
};

const staticMenus: Menu[] = [];
(() => {
  menuModules.sort((a, b) => {
    return (a.orderNo || 0) - (b.orderNo || 0);
  });

  for (const menu of menuModules) {
    staticMenus.push(transformMenuModule(menu));
  }
})();

async function getAsyncMenus() {
  const permissionStore = usePermissionStore();
  if (isBackMode()) {
    return permissionStore.getBackMenuList.filter((item) => !item.meta?.hideMenu && !item.hideMenu);
  }
  if (isRouteMappingMode()) {
    return permissionStore.getFrontMenuList.filter((item) => !item.hideMenu);
  }
  return staticMenus;
}

export const getMenus = async (): Promise<Menu[]> => {
  const menus = await getAsyncMenus();
  if (isRoleMode()) {
    const routes = router.getRoutes();
    return filter(menus, basicFilter(routes));
  }
  // console.log('getMenus');
  // console.log(menus);
  const userStore = useUserStore();
  console.log(userStore.getUserInfo);
  debugger;
  if (userStore.getUserInfo['id']) {
    const [unreadStatusStore] = unreadCustomerStatus();
    const [storeFlow, { returnNum: returnFlowNum }] = unreadFlowStatus();
    const [unreadBacklogStore] = useBacklogCard();

    // for
    console.log(menus);
    for (let i = 0; i < menus.length; i++) {
      if (menus[i]['name'] === 'routes.dashboard.dashboard') {
        Object.assign(menus[i], {
          tag: { dot: false, content: unreadBacklogStore.total, type: 'error' },
        });
        Object.assign(menus[i]['children'][0], {
          tag: { dot: false, content: unreadBacklogStore.total, type: 'error' },
        });
      } else if (menus[i]['name'] === '客户管理') {
        Object.assign(menus[i], {
          tag: { dot: false, content: unreadStatusStore.total, type: 'error' },
        });
        Object.assign(menus[i]['children'][0], {
          tag: { dot: false, content: unreadStatusStore.total, type: 'error' },
        });
      } else if (menus[i]['name'] === '审批管理') {
        Object.assign(menus[i], {
          tag: { dot: false, content: storeFlow.total, type: 'error' },
        });
        Object.assign(menus[i]['children'][0], {
          tag: { dot: false, content: storeFlow.total, type: 'error' },
        });
      }
      returnFlowNum();
    }

    // Object.assign(menus[1], {
    //   tag: { dot: false, content: unreadStatusStore.total, type: 'error' },
    // });
    // Object.assign(menus[1]['children'][0], {
    //   tag: { dot: false, content: unreadStatusStore.total, type: 'error' },
    // });
    // console.log('menu flow store: ' + storeFlow.total);
    // returnFlowNum();
    // console.log(returnFlowNum());
  }
  return menus;
};

export async function getCurrentParentPath(currentPath: string) {
  const menus = await getAsyncMenus();
  const allParentPath = await getAllParentPath(menus, currentPath);
  return allParentPath?.[0];
}

// Get the level 1 menu, delete children
export async function getShallowMenus(): Promise<Menu[]> {
  const menus = await getAsyncMenus();
  const shallowMenuList = menus.map((item) => ({ ...item, children: undefined }));
  if (isRoleMode()) {
    const routes = router.getRoutes();
    return shallowMenuList.filter(basicFilter(routes));
  }
  return shallowMenuList;
}

// Get the children of the menu
export async function getChildrenMenus(parentPath: string) {
  const menus = await getMenus();
  const parent = menus.find((item) => item.path === parentPath);
  if (!parent || !parent.children || !!parent?.meta?.hideChildrenInMenu) {
    return [] as Menu[];
  }
  if (isRoleMode()) {
    const routes = router.getRoutes();
    return filter(parent.children, basicFilter(routes));
  }
  return parent.children;
}

function basicFilter(routes: RouteRecordNormalized[]) {
  return (menu: Menu) => {
    const matchRoute = routes.find((route) => {
      if (isUrl(menu.path)) return true;

      if (route.meta?.carryParam) {
        return pathToRegexp(route.path).test(menu.path);
      }
      const isSame = route.path === menu.path;
      if (!isSame) return false;

      if (route.meta?.ignoreAuth) return true;

      return isSame || pathToRegexp(route.path).test(menu.path);
    });

    if (!matchRoute) return false;
    menu.icon = (menu.icon || matchRoute.meta.icon) as string;
    menu.meta = matchRoute.meta;
    return true;
  };
}
