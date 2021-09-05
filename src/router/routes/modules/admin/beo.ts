import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const beo: AppRouteModule = {
  path: '/beo',
  name: 'BeoManagement',
  component: LAYOUT,
  redirect: '/beo/order',
  meta: {
    orderNo: 400,
    icon: 'fe:list-order',
    title: 'BEO管理',
    roles: [
      RoleEnum.SUPER,
      RoleEnum.MANAGER,
      RoleEnum.SALES,
      RoleEnum.SALES_MANAGER,
      RoleEnum.HOUSEKEEPER_MANAGER,
      RoleEnum.FINANCE_MANAGER,
      RoleEnum.STAFF,
      RoleEnum.BOOKER,
    ],
  },
  children: [
    {
      path: 'order',
      name: 'OrderList',
      meta: {
        title: 'BEO单',
      },
      component: () => import('/@/views/admin/beo/order/index.vue'),
    },
    {
      path: 'finish',
      name: 'FinishOrderList',
      meta: {
        title: '已完成BEO单',
      },
      component: () => import('/@/views/admin/beo/finish/index.vue'),
    },
    {
      path: 'order_detail/:id',
      name: 'OrderDetail',
      meta: {
        title: 'BEO单详情',

        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/beo/order',
      },
      component: () => import('/@/views/admin/beo/order/OrderDetail.vue'),
    },
    {
      path: 'order_oper/:id',
      name: 'OrderOper',
      meta: {
        title: 'BEO单下单',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/beo/order',
      },
      component: () => import('/@/views/admin/beo/order/BeoOrderModal.vue'),
    },
    {
      path: 'order_replenish/:id',
      name: 'OrderReplenish',
      meta: {
        title: 'BEO单补充',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/beo/order',
      },
      component: () => import('/@/views/admin/beo/order/BeoOrderReplenishModal.vue'),
    },
    {
      path: 'order_edit/:id',
      name: 'OrderEditModal',
      meta: {
        title: 'BEO单编辑',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/beo/order',
      },
      component: () => import('/@/views/admin/beo/order/BeoOrderEditModal.vue'),
    },
    {
      path: 'order_edit_finish/:id',
      name: 'OrderFinishEditModal',
      meta: {
        title: '已完成BEO单编辑',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/beo/finish',
      },
      component: () => import('/@/views/admin/beo/finish/BeoOrderEditModal.vue'),
    },
    {
      path: 'task',
      name: 'TaskList',
      meta: {
        title: 'BEO任务',
      },
      component: () => import('/@/views/admin/beo/task/index.vue'),
    },
    {
      path: 'task_detail/:id',
      name: 'TaskDetailModal',
      meta: {
        title: 'BEO任务详情',

        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/beo/task',
      },
      component: () => import('/@/views/admin/beo/task/TaskDetailModal.vue'),
    },
  ],
};

export default beo;
