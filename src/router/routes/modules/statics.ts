// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// // import { t } from '/@/hooks/web/useI18n';
// import { RoleEnum } from '/@/enums/roleEnum';

// const statics: AppRouteModule = {
//   path: '/statics',
//   name: 'Statics',
//   component: LAYOUT,
//   redirect: '/statics/staticsAndAnalysis',
//   meta: {
//     orderNo: 10,
//     icon: 'ion:bar-chart-outline',
//     title: '分析管理',
//   },
//   children: [
//     {
//       path: 'staticsAndAnalysis',
//       name: 'StaticsAndAnalysis',
//       component: () => import('/@/views/statics/analysis/index.vue'),
//       meta: {
//         title: '统计分析',
//         roles: [
//           RoleEnum.SUPER,
//           RoleEnum.SALES_OFFICER,
//           RoleEnum.SALES_MANAGER,
//           RoleEnum.MANAGER,
//           RoleEnum.BOOKER,
//           RoleEnum.ANALYST,
//           RoleEnum.LOOK_ABOUT_ANLYLSIS,
//           RoleEnum.FINANCE_MANAGER,
//         ],
//       },
//     },
//   ],
// };

// export default statics;
