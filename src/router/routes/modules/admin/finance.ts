import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const finance: AppRouteModule = {
  path: '/finance',
  name: 'FinanceManagement',
  component: LAYOUT,
  redirect: '/finance/total',
  meta: {
    orderNo: 400,
    icon: 'ion:settings-outline',
    title: '财务管理',
  },
  children: [
    {
      path: 'total',
      name: 'TotalList',
      meta: {
        title: '应收款列表',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/finance/total/index.vue'),
    },
    {
      path: 'accept',
      name: 'AcceptList',
      meta: {
        title: '回款列表',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/finance/accept/index.vue'),
    },
    {
      path: 'total_detail/:id',
      name: 'TotalDetail',
      meta: {
        hideMenu: true,
        title: '应收款单详情',
        ignoreKeepAlive: true,
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
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/finance/accept',
      },
      component: () => import('/@/views/admin/finance/accept/AcceptDetailModal.vue'),
    },
  ],
};

export default finance;
