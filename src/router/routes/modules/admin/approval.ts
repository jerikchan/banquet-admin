import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const approval: AppRouteModule = {
  path: '/approval',
  name: 'ApprovalManagement',
  component: LAYOUT,
  redirect: '/approval/flow',
  meta: {
    orderNo: 400,
    icon: 'fluent:approval-app-32-regular',
    title: '审批管理',
  },
  children: [
    {
      path: 'flow',
      name: 'FlowManagement',
      meta: {
        title: '流程配置',

        roles: [RoleEnum.SUPER],
      },
      component: () => import('/@/views/admin/approval/flow/index.vue'),
    },
    {
      path: 'review',
      name: 'ReviewManagement',
      meta: {
        title: '待我审核',
      },
      component: () => import('/@/views/admin/approval/review/index.vue'),
    },
    {
      path: 'form',
      name: 'FormManagement',
      meta: {
        title: '与我相关',
      },
      component: () => import('/@/views/admin/approval/form/index.vue'),
    },
    {
      path: 'form_detail/:id',
      name: 'FormManagementDetail',
      meta: {
        title: '与我相关详情',
        hideTab: true,
        hideMenu: true,
        showMenu: false,
        currentActiveMenu: '/approval/form',
      },
      component: () => import('/@/views/admin/approval/form/FormDetailModal.vue'),
    },
    {
      path: 'review_detail/:id',
      name: 'ReviewDetail',
      meta: {
        title: '与我相关详情',
        hideTab: true,
        hideMenu: true,
        showMenu: false,
        currentActiveMenu: '/approval/review',
      },
      component: () => import('/@/views/admin/approval/review/ReviewDetailModal.vue'),
    },
  ],
};

export default approval;
