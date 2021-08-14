import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const banquet: AppRouteModule = {
  path: '/banquet',
  name: 'BanquetManagement',
  component: LAYOUT,
  redirect: '/banquet/banquet_type',
  meta: {
    orderNo: 300,
    icon: 'ion:settings-outline',
    title: '宴会管理',
  },
  children: [
    {
      path: 'banquet_type',
      name: 'BanquetTypeManagement',
      meta: {
        title: '宴会类型管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/banquet/banquet-type/index.vue'),
    },
    {
      path: 'banquet',
      name: 'BanquetList',
      meta: {
        title: '宴会列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/banquet/banquet/index.vue'),
    },
    {
      path: 'room_type',
      name: 'RoomTypeManagement',
      meta: {
        title: '厅房类型管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/banquet/room-type/index.vue'),
    },
    {
      path: 'room',
      name: 'RoomList',
      meta: {
        title: '厅房列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/banquet/room/index.vue'),
    },
  ],
};

export default banquet;
