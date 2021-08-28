import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const manager: AppRouteModule = {
  path: '/master',
  name: 'MasterManager',
  component: LAYOUT,
  redirect: '/master/manager',
  meta: {
    orderNo: 1000,
    icon: 'ion:settings-outline',
    title: '管家管理',
  },
  children: [
    {
      path: 'manager',
      name: 'ManagerManagerMent',
      meta: {
        title: '管家列表',
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/admin/manager/banquet/index.vue'),
    },
    {
      path: 'customer_follow_detail/:id',
      name: 'CustomerFollowFormDetail',
      meta: {
        hideMenu: true,
        title: '客户跟进记录详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/CustomerFollowFormDetailModal.vue'),
    },
    {
      path: 'customer_follow_oper/:id',
      name: 'CustomerFollowFormOper',
      meta: {
        hideMenu: true,
        title: '客户跟进记录修改',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/CustomerFollowFormModal.vue'),
    },
    {
      path: 'setmeal_content_detail/:id',
      name: 'SetMealContentFormDetail',
      meta: {
        hideMenu: true,
        title: '套餐内容登记详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/SetMealContentFormDetailModal.vue'),
    },
    {
      path: 'set_meal_content_form_oper/:id',
      name: 'SetMealContentFormOper',
      meta: {
        hideMenu: true,
        title: '套餐内容登记修改',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/SetMealContentFormModal.vue'),
    },
    {
      path: 'send_person_detail/:id',
      name: 'SendPersonFormDetail',
      meta: {
        hideMenu: true,
        title: '人员派单登记详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/SendPersonFormDetailModal.vue'),
    },
    {
      path: 'send_person_form_oper/:id',
      name: 'SendPersonFormOper',
      meta: {
        hideMenu: true,
        title: '人员派单登记修改',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/SendPersonFormModal.vue'),
    },
    {
      path: 'tryon_makeup_detail/:id',
      name: 'TryOnMakeUpFormDetail',
      meta: {
        hideMenu: true,
        title: '试妆登记详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/TryOnMakeUpFormDetailModal.vue'),
    },
    {
      path: 'try_on_make_uo_oper/:id',
      name: 'TryOnMakeUpFormOper',
      meta: {
        hideMenu: true,
        title: '试妆登记修改',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/TryOnMakeUpFormModal.vue'),
    },
    {
      path: 'siyi_chat_detail/:id',
      name: 'SiYiChatFormDetail',
      meta: {
        hideMenu: true,
        title: '司仪沟通登记详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/SiYiChatFormDetailModal.vue'),
    },
    {
      path: 'si_yi_chat_form_oper/:id',
      name: 'SiYiChatFormOper',
      meta: {
        hideMenu: true,
        title: '司仪沟通登记修改',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/SiYiChatFormModal.vue'),
    },
    {
      path: 'family_meeting_form_detail/:id',
      name: 'FamilyMeetingFormDetail',
      meta: {
        hideMenu: true,
        title: '家庭会议登记详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/FamilyMeetingFormDetailModal.vue'),
    },
    {
      path: 'family_meeting_form_oper/:id',
      name: 'FamilyMeetingFormOper',
      meta: {
        hideMenu: true,
        title: '家庭会议登记修改',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/FamilyMeetingFormModal.vue'),
    },
    {
      path: 'attention_check_form_detail/:id',
      name: 'AttentionCheckFormDetail',
      meta: {
        hideMenu: true,
        title: '婚礼注意事项筛查登记详情',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/AttentionCheckFormDetailModal.vue'),
    },
    {
      path: 'attention_check_form_oper/:id',
      name: 'AttentionCheckFormOper',
      meta: {
        hideMenu: true,
        title: '婚礼注意事项筛查登记修改',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/master/manager',
      },
      component: () => import('/@/views/admin/manager/banquet/AttentionCheckFormModal.vue'),
    },
  ],
};

export default manager;
