import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const finance: AppRouteModule = {
  path: '/finance',
  name: 'FinanceManagement',
  component: LAYOUT,
  redirect: '/finance/total',
  meta: {
    orderNo: 400,
    icon: 'icon-park-outline:finance',
    title: '财务管理',
    roles: [
      RoleEnum.SUPER,
      RoleEnum.MANAGER,
      RoleEnum.SALES,
      RoleEnum.SALES_MANAGER,
      RoleEnum.HOUSEKEEPER_MANAGER,
      RoleEnum.FINANCE_MANAGER,
    ],
  },
  children: [
    {
      path: 'total',
      name: 'TotalList',
      meta: {
        title: '应收款列表',
      },
      component: () => import('/@/views/admin/finance/total/index.vue'),
    },
    {
      path: 'accept',
      name: 'AcceptList',
      meta: {
        title: '回款列表',
        hideMenu: true,
      },
      component: () => import('/@/views/admin/finance/accept/index.vue'),
    },
    {
      path: 'total_detail/:id',
      name: 'TotalDetail',
      meta: {
        hideMenu: true,
        title: '应收款单详情',
        hideTab: true,
        showMenu: false,
        currentActiveMenu: '/finance/total',
      },
      component: () => import('/@/views/admin/finance/total/TotalDetailModal.vue'),
    },
    {
      path: 'accept_detail/:id',
      name: 'AcceptDetail',
      meta: {
        hideMenu: true,
        title: '回款单详情',
        hideTab: true,
        showMenu: false,
        currentActiveMenu: '/finance/accept',
      },
      component: () => import('/@/views/admin/finance/accept/AcceptDetailModal.vue'),
    },
  ],
};

export default finance;
