// import type { AppRouteModule } from '/@/router/types';

// import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

// const directory: AppRouteModule = {
//   path: '/beo',
//   name: 'Beo',
//   component: LAYOUT,
//   redirect: '/beo/dingdan',
//   meta: {
//     orderNo: 2000,
//     icon: 'ion:settings-outline',
//     title: 'BEO管理',
//   },
//   children: [
//     {
//       path: 'dingdan',
//       name: 'BeoDingdanManagement',
//       meta: {
//         title: 'BEO订单',
//         ignoreKeepAlive: false,
//       },
//       component: () => import('/@/views/sys/exception/Exception.vue'),
//     },
//     {
//       path: 'renwu',
//       name: 'BeoRenwuManagement',
//       meta: {
//         title: 'BEO任务',
//         ignoreKeepAlive: true,
//       },
//       component: () => import('/@/views/sys/exception/Exception.vue'),
//     },
//   ],
// };

// export default directory;
