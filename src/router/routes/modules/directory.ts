import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const directory: AppRouteModule = {
  path: '/directory',
  name: 'Directory',
  component: LAYOUT,
  redirect: '/directory/yanhui',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.directory.moduleName'),
  },
  children: [
    {
      path: 'yanhui',
      name: 'YanhuiManagement',
      meta: {
        title: t('routes.demo.directory.yanhui'),
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/directory/yanhui/index.vue'),
    },
    {
      path: 'tingfang',
      name: 'TingfangManagement',
      meta: {
        title: t('routes.demo.directory.tingfang'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/directory/tingfang/index.vue'),
    },
    {
      path: 'qudao',
      name: 'QudaoManagement',
      meta: {
        title: t('routes.demo.directory.qudao'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/directory/qudao/index.vue'),
    },
  ],
};

export default directory;
