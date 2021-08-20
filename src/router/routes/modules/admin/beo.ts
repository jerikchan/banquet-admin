import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const beo: AppRouteModule = {
  path: '/beo',
  name: 'BeoManagement',
  component: LAYOUT,
  redirect: '/beo/order',
  meta: {
    orderNo: 400,
    icon: 'ion:settings-outline',
    title: 'BEO管理',
  },
  children: [
    {
      path: 'order',
      name: 'OrderList',
      meta: {
        title: '订单列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/beo/order/index.vue'),
    },
    {
      path: 'task',
      name: 'TaskList',
      meta: {
        title: '任务列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/beo/task/index.vue'),
    },
  ],
};

export default beo;
