import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { RoleEnum } from '/@/enums/roleEnum';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/workbench',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        title: t('routes.dashboard.analysis'),
        roles: [RoleEnum.SUPER, RoleEnum.SALES_OFFICER, RoleEnum.SALES_MANAGER, RoleEnum.SALES],
      },
    },
    // {
    //   path: 'test1',
    //   name: 'Test1',
    //   component: () => import('/@/views/demo/table/FetchTable.vue'),
    //   meta: {
    //     // affix: true,
    //     title: '组件测试',
    //   },
    // },
    // {
    //   path: 'test2',
    //   name: 'Test2',
    //   component: () => import('/@/views/demo/permission/front/index.vue'),
    //   meta: {
    //     // affix: true,
    //     title: '权限测试',
    //   },
    // },
  ],
};

export default dashboard;
