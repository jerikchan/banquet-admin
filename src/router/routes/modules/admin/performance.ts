import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const manager: AppRouteModule = {
  path: '/performance',
  name: 'Performance',
  component: LAYOUT,
  redirect: '/performance/personal',
  meta: {
    orderNo: 1000,
    icon: 'grommet-icons:document-performance',
    title: '绩效管理',
    roles: [
      RoleEnum.SUPER,
      RoleEnum.MANAGER,
      RoleEnum.SALES,
      RoleEnum.SALES_MANAGER,
      RoleEnum.LOOK_ABOUT_PERFORMANCE,
      RoleEnum.FINANCE_MANAGER,
    ],
  },
  children: [
    {
      path: 'personal',
      name: 'PersonalPerformanceFunc',
      meta: {
        title: '个人业绩',
      },
      component: () => import('/@/views/admin/performance/personal/index.vue'),
    },
    {
      path: 'deptPerformance',
      name: 'PerformanceFunc',
      meta: {
        title: '业绩列表',
        roles: [
          RoleEnum.SUPER,
          RoleEnum.MANAGER,
          RoleEnum.SALES_MANAGER,
          RoleEnum.LOOK_ABOUT_PERFORMANCE,
          RoleEnum.FINANCE_MANAGER,
        ],
      },
      component: () => import('/@/views/admin/performance/dept/index.vue'),
    },
    {
      path: 'ratioPerformance',
      name: 'ratioPerformanceFunc',
      meta: {
        title: '业绩系数设置',
        roles: [RoleEnum.SUPER, RoleEnum.MANAGER, RoleEnum.SALES_MANAGER],
      },
      component: () => import('/@/views/admin/performance/ratio/index.vue'),
    },
  ],
};

export default manager;
