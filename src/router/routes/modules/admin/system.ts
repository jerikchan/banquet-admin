import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

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
      },
      component: () => import('/@/views/admin/system/account/index.vue'),
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: '员工详情',

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

        roles: [RoleEnum.SUPER, RoleEnum.MANAGER],
      },
      component: () => import('/@/views/admin/system/role/index.vue'),
    },
    {
      path: 'role_detail/:id',
      name: 'RoleDetail',
      meta: {
        hideMenu: true,
        title: '角色详情',

        showMenu: false,
        currentActiveMenu: '/system/role',
      },
      component: () => import('/@/views/admin/system/role/RoleDetailModal.vue'),
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: '部门管理',
      },
      component: () => import('/@/views/admin/system/dept/index.vue'),
    },
    {
      path: 'dept_detail/:id',
      name: 'DeptDetail',
      meta: {
        hideMenu: true,
        title: '部门详情',

        showMenu: false,
        currentActiveMenu: '/system/dept',
      },
      component: () => import('/@/views/admin/system/dept/DeptDetailModal.vue'),
    },
  ],
};

export default system;
