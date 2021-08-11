import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const directory: AppRouteModule = {
  path: '/xiaoxi',
  name: 'Xiaoxi',
  component: LAYOUT,
  redirect: '/xiaoxi/list',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: '消息管理',
  },
  children: [
    {
      path: 'list',
      name: 'XiaoxiListManagement',
      meta: {
        title: '提醒列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/xiaoxi/tixing-list/index.vue'),
    },
  ],
};

export default directory;
