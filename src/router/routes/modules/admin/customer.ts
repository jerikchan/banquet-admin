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
      path: 'customer_detail/:id',
      name: 'CustomerDetail',
      meta: {
        title: '客户详情',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/customer/list',
      },
      component: () => import('/@/views/admin/customer/list/CustomerDetail.vue'),
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
        title: '跟进记录',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/customer/comment/index.vue'),
    },
    {
      path: 'comment_type',
      name: 'CommentTypeManagement',
      meta: {
        title: '跟进方式',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/customer/comment-type/index.vue'),
    },
  ],
};

export default customer;
