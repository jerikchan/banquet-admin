import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const customer: AppRouteModule = {
  path: '/customer',
  name: 'CustomerManagement',
  component: LAYOUT,
  redirect: '/customer/list',
  meta: {
    orderNo: 200,
    icon: 'ic:outline-account-box',
    title: '客户管理',
    roles: [
      RoleEnum.SUPER,
      RoleEnum.MANAGER,
      RoleEnum.BOOKER,
      RoleEnum.SALES,
      RoleEnum.SALES_MANAGER,
    ],
  },
  children: [
    {
      path: 'list',
      name: 'CustomerList',
      meta: {
        title: '客户列表',
      },
      component: () => import('/@/views/admin/customer/list/index.vue'),
    },
    {
      path: 'customer_detail/:id',
      name: 'CustomerDetail',
      meta: {
        title: '客户详情',

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

        roles: [RoleEnum.SUPER],
      },
      component: () => import('/@/views/admin/customer/channel/index.vue'),
    },
    {
      path: 'comment',
      name: 'CommentManagement',
      meta: {
        title: '跟进记录',
      },
      component: () => import('/@/views/admin/customer/comment/index.vue'),
    },
    {
      path: 'comment_type',
      name: 'CommentTypeManagement',
      meta: {
        title: '跟进方式',

        roles: [RoleEnum.SUPER],
      },
      component: () => import('/@/views/admin/customer/comment-type/index.vue'),
    },
    {
      path: 'cancel_direction',
      name: 'CancelDirectionManager',
      meta: {
        title: '流失去向配置',

        roles: [RoleEnum.SUPER],
      },
      component: () => import('/@/views/admin/customer/cancel-direction/index.vue'),
    },
    {
      path: 'cancel_reason',
      name: 'CancelReasonManager',
      meta: {
        title: '流失原因配置',

        roles: [RoleEnum.SUPER],
      },
      component: () => import('/@/views/admin/customer/cancel-reason/index.vue'),
    },
  ],
};

export default customer;
