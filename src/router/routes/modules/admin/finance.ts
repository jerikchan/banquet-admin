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
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/finance/total/index.vue'),
    },
    {
      path: 'accept',
      name: 'AcceptList',
      meta: {
        title: '回款列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/finance/accept/index.vue'),
    },
  ],
};

export default finance;
