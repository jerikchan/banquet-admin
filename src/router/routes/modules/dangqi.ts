import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const directory: AppRouteModule = {
  path: '/dangqi',
  name: 'Dangqi',
  component: LAYOUT,
  redirect: '/dangqi/yanhui',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: '档期管理',
  },
  children: [
    {
      path: 'yanhui',
      name: 'DangqiYanhuiManagement',
      meta: {
        title: '宴会档期',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/sys/exception/Exception.vue'),
    },
  ],
};

export default directory;
