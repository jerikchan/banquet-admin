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
        title: '流程配置',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/approval/flow/index.vue'),
    },
    {
      path: 'review',
      name: 'ReviewManagement',
      meta: {
        title: '待我审核',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/approval/review/index.vue'),
    },
    {
      path: 'form',
      name: 'FormManagement',
      meta: {
        title: '与我相关',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/approval/form/index.vue'),
    },
    {
      path: 'form_detail/:id',
      name: 'FormManagementDetail',
      meta: {
        title: '与我相关详情',
        ignoreKeepAlive: false,
        hideMenu: true,
        showMenu: false,
        currentActiveMenu: '/approval/form',
      },
      component: () => import('/@/views/admin/approval/form/FormDetailModal.vue'),
    },
  ],
};

export default approval;
