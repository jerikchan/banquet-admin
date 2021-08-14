import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const approval: AppRouteModule = {
  path: '/approval',
  name: 'ApprovalManagement',
  component: LAYOUT,
  redirect: '/approval/flow',
  meta: {
    orderNo: 400,
    icon: 'ion:settings-outline',
    title: '审批管理',
  },
  children: [
    {
      path: 'flow',
      name: 'FlowManagement',
      meta: {
        title: '审批流程管理',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/approval/flow/index.vue'),
    },
  ],
};

export default approval;
