import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const directory: AppRouteModule = {
  path: '/jixiao',
  name: 'Hetong',
  component: LAYOUT,
  redirect: '/jixiao/list',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: '绩效管理',
  },
  children: [
    {
      path: 'list',
      name: 'HetongListManagement',
      meta: {
        title: '员工绩效',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/exception/Exception.vue'),
    },
    {
      path: 'list2',
      name: 'HetongList2Management',
      meta: {
        title: '档期提成',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/exception/Exception.vue'),
    },
    {
      path: 'list3',
      name: 'HetongList3Management',
      meta: {
        title: '角色KPI',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/exception/Exception.vue'),
    },
  ],
};

export default directory;
