import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const contract: AppRouteModule = {
  path: '/contract',
  name: 'ContractManagement',
  component: LAYOUT,
  redirect: '/contract/list',
  meta: {
    orderNo: 400,
    icon: 'ion:settings-outline',
    title: '合同管理',
  },
  children: [
    {
      path: 'list',
      name: 'ContractList',
      meta: {
        title: '合同列表',
        ignoreKeepAlive: false,
      },
      component: () => import('/@/views/admin/contract/list/index.vue'),
    },
  ],
};

export default contract;
