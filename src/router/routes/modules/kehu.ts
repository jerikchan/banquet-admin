import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const directory: AppRouteModule = {
  path: '/kehu',
  name: 'Kehu',
  component: LAYOUT,
  redirect: '/kehu/kehu-list',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: '客户管理',
  },
  children: [
    {
      path: 'kehu-list',
      name: 'KehuList',
      meta: {
        title: '客户列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/kehu/kehu-list/index.vue'),
    },
    {
      path: 'list2',
      name: 'KehuList2Management',
      meta: {
        title: '沟通记录',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/exception/Exception.vue'),
    },
  ],
};

export default directory;
