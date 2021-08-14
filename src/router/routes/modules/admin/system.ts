import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const system: AppRouteModule = {
  path: '/system',
  name: 'SystemManagement',
  component: LAYOUT,
  redirect: '/system/account',
  meta: {
    orderNo: 1000,
    icon: 'ion:settings-outline',
    title: '系统管理',
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: '员工列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/system/account/index.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: '员工详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('/@/views/demo/system/account/AccountDetail.vue'),
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: '角色管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/system/role/index.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: '部门管理',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/system/dept/index.vue'),
    },
  ],
};

export default system;
