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
        title: 'BEO单',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/beo/order/index.vue'),
    },
    {
      path: 'order_detail/:id',
      name: 'OrderDetail',
      meta: {
        title: 'BEO单详情',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/beo/order',
      },
      component: () => import('/@/views/admin/beo/order/OrderDetail.vue'),
    },
    {
      path: 'task',
      name: 'TaskList',
      meta: {
        title: 'BEO任务',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/beo/task/index.vue'),
    },
  ],
};

export default beo;
