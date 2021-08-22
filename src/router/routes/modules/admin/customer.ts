import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const customer: AppRouteModule = {
  path: '/customer',
  name: 'CustomerManagement',
  component: LAYOUT,
  redirect: '/customer/list',
  meta: {
    orderNo: 200,
    icon: 'ion:settings-outline',
    title: '客户管理',
  },
  children: [
    {
      path: 'list',
      name: 'CustomerList',
      meta: {
        title: '客户列表',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/customer/list/index.vue'),
    },
    {
      path: 'channel',
      name: 'ChannelManagement',
      meta: {
        title: '获客渠道',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/customer/channel/index.vue'),
    },
    {
      path: 'comment',
      name: 'CommentManagement',
      meta: {
        title: '沟通记录',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/customer/comment/index.vue'),
    },
  ],
};

export default customer;
