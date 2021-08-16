import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/test',
  name: 'Test',
  component: LAYOUT,
  redirect: '/test/test1',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '测试',
  },
  children: [
    {
      path: 'test1',
      name: 'Test1',
      component: () => import('/@/views/demo/table/FetchTable.vue'),
      meta: {
        // affix: true,
        title: '测试1',
      },
    },
  ],
};

export default dashboard;