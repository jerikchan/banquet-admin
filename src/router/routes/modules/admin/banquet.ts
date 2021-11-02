import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const banquet: AppRouteModule = {
  path: '/banquet',
  name: 'BanquetManagement',
  component: LAYOUT,
  redirect: '/banquet/banquet_type',
  meta: {
    orderNo: 300,
    icon: 'ph:wine',
    title: '宴会管理',
    roles: [
      RoleEnum.SUPER,
      RoleEnum.MANAGER,
      RoleEnum.SALES,
      RoleEnum.SALES_MANAGER,
      RoleEnum.FINANCE_MANAGER,
      RoleEnum.BOOKER,
      RoleEnum.LOOK_ABOUT_SCHEDULE,
    ],
  },
  children: [
    {
      path: 'banquet_type',
      name: 'BanquetTypeManagement',
      meta: {
        title: '宴会类型管理',

        roles: [RoleEnum.SUPER, RoleEnum.MANAGER],
      },
      component: () => import('/@/views/admin/banquet/banquet-type/index.vue'),
    },
    {
      path: 'banquet',
      name: 'BanquetList',
      meta: {
        title: '档期列表',
      },
      // component: () => import('/@/views/admin/banquet/banquet/index.vue'),
      component: () => import('/@/views/admin/banquet/schedule/index.vue'),
    },
    {
      path: 'room_type',
      name: 'RoomTypeManagement',
      meta: {
        title: '厅房类型管理',
        roles: [RoleEnum.SUPER, RoleEnum.MANAGER],
      },
      component: () => import('/@/views/admin/banquet/room-type/index.vue'),
    },
    {
      path: 'room',
      name: 'RoomList',
      meta: {
        title: '厅房列表',
        roles: [RoleEnum.SUPER, RoleEnum.MANAGER, RoleEnum.SALES_MANAGER],
      },
      component: () => import('/@/views/admin/banquet/room/index.vue'),
    },
    {
      path: 'room_detail/:id',
      name: 'RoomDetail',
      meta: {
        hideMenu: true,
        title: '厅房详细信息',
        hideTab: true,
        showMenu: false,
        currentActiveMenu: '/banquet/room',
      },
      component: () => import('/@/views/admin/banquet/room/RoomDetailModal.vue'),
    },
    {
      path: 'banquet_detail/:id',
      name: 'BanquetDetail',
      meta: {
        hideMenu: true,
        title: '档期详细信息',
        hideTab: true,
        showMenu: false,
        currentActiveMenu: '/banquet/banquet',
      },
      component: () => import('/@/views/admin/banquet/banquet/BanquetDetailModal.vue'),
    },
    {
      path: 'foods',
      name: 'FoodTypeManagement',
      meta: {
        title: '菜单菜品',
        roles: [RoleEnum.SUPER, RoleEnum.MANAGER],
      },
      component: () => import('/@/views/admin/banquet/foods/index.vue'),
    },
    {
      path: 'meal_type',
      name: 'MealTypeManagement',
      meta: {
        title: '餐标列表',
        roles: [RoleEnum.SUPER, RoleEnum.MANAGER],
      },
      component: () => import('/@/views/admin/banquet/meal-type/index.vue'),
    },
  ],
};

export default banquet;
