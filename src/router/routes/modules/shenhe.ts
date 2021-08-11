import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const directory: AppRouteModule = {
  path: '/shenhe',
  name: 'Shenhe',
  component: LAYOUT,
  redirect: '/shenhe/flow',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: '审核管理',
  },
  children: [
    {
      path: 'flow',
      name: 'FlowList',
      meta: {
        title: '审批列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/shenhe/shenpi-list/index.vue'),
    },
  ],
};

export default directory;
