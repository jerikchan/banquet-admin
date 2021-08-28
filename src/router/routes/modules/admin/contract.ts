import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { RoleEnum } from '/@/enums/roleEnum';

const contract: AppRouteModule = {
  path: '/contract',
  name: 'ContractManagement',
  component: LAYOUT,
  redirect: '/contract/list',
  meta: {
    orderNo: 400,
    icon: 'ion:settings-outline',
    title: '合同管理',
    roles: [RoleEnum.SUPER, RoleEnum.MANAGER, RoleEnum.SALES, RoleEnum.SALES_MANAGER],
  },
  children: [
    {
      path: 'list',
      name: 'ContractList',
      meta: {
        title: '合同列表',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/contract/list/index.vue'),
    },
  ],
};

export default contract;
