import { BasicColumn, FormSchema } from '/@/components/Table';
import { getCustomerList } from '/@/api/admin/customer';
import { getCommentTypeList } from '/@/api/admin/customer';
import { getReturnTypeList } from '/@/api/admin/finance';
import { getTotalList } from '/@/api/admin/finance';
import { DescItem } from '/@/components/Description/index';
// import { FormSchema } from '/@/components/Table';

interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '刚刚',
    desc: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
  },
  {
    avatar: 'dynamic-avatar-2|svg',
    name: '艾文',
    date: '1个小时前',
    desc: `关注了 <a>威廉</a> `,
  },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: '克里斯',
    date: '1天前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: 'Vben',
    date: '2天前',
    desc: `发表文章 <a>如何编写一个Vite插件</a> `,
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: '皮特',
    date: '3天前',
    desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '杰克',
    date: '1周前',
    desc: `关闭了问题 <a>如何运行项目</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '1周前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '2021-04-01 20:00',
    desc: `推送了代码到 <a>Github</a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: '不要等待机会，而要创造机会。',
    group: '开源组',
    date: '2021-04-01',
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '现在的你决定将来的你。',
    group: '算法组',
    date: '2021-04-01',
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: '没有什么才能比努力更重要。',
    group: '上班摸鱼',
    date: '2021-04-01',
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    date: '2021-04-01',
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '健康的身体是实目标的基石。',
    group: '技术牛',
    date: '2021-04-01',
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#4daf1bc9',
    desc: '路是走出来的，而不是空想出来的。',
    group: '架构组',
    date: '2021-04-01',
  },
];

export const backlogColumns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '待办时间',
    dataIndex: 'backlogTime',
    width: 200,
  },
  {
    title: '事项类型',
    dataIndex: 'type',
    width: 120,
  },
  {
    title: '待办内容',
    dataIndex: 'content',
    width: 200,
  },
  {
    title: '状态',
    dataIndex: 'statusStr',
    width: 100,
  },
];

export const submitReportColumn: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '预计跟进时间',
    dataIndex: 'backlogTime',
    width: 150,
  },
  {
    title: '跟进销售',
    dataIndex: 'salesName',
    width: 120,
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 80,
  },
  {
    title: '呈报内容',
    dataIndex: 'content',
    width: 200,
  },
  {
    title: '处理状态',
    dataIndex: 'statusStr',
    width: 200,
  },
];

export const commentFormSchema: FormSchema[] = [
  {
    field: 'customerId',
    label: '客户名称',
    component: 'ApiSelect',
    componentProps: {
      api: getCustomerList,
      labelField: 'customerName',
      valueField: 'id',
      disabled: false,
    },
    required: true,
  },
  {
    field: 'chatRealTime',
    label: '跟进时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },
  {
    label: '跟进方式',
    field: 'chatType',
    component: 'ApiSelect',
    componentProps: {
      api: getCommentTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: true,
  },
  {
    label: '预计下次跟进',
    field: 'preNextChatTime',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },
  {
    label: '是否邀约进店',
    field: 'isFirst',
    component: 'Switch',
    // dynamicDisabled: ({ values }) => {
    //   // debugger;
    //   return !!(values.isFirst === 'true');
    // },
    componentProps: {
      // ifShow: ({ values }) => {
      //   console.log(values);
      //   return false;
      // },
      // show: false,
    },
    // ifShow: values.isFirst,
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    required: true,
  },
];

export const acceptFormSchema: FormSchema[] = [
  {
    field: 'receivableId',
    label: '应收款单',
    component: 'ApiSelect',
    componentProps: {
      api: getTotalList,
      labelField: 'code',
      valueField: 'id',
      disabled: true,
    },
    required: true,
  },
  {
    field: 'agreementCode',
    label: '合同编号',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: true,
  },
  // {
  //   field: 'returnTime',
  //   label: '回款时间',
  //   component: 'DatePicker',
  //   componentProps: {
  //     showTime: true,
  //     format: 'YYYY-MM-DD HH:mm:ss',
  //   },
  //   required: true,
  // },
  // {
  //   field: 'returnMan',
  //   label: '回款人',
  //   component: 'Input',
  //   required: true,
  // },
  {
    field: 'returnType',
    label: '款项类型',
    component: 'ApiSelect',
    componentProps: {
      api: getReturnTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: true,
  },
  {
    field: 'returnMoney',
    label: '回款金额',
    component: 'Input',
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    required: true,
  },
];

export const tryOnMakeUpFormSchema: FormSchema[] = [
  {
    field: 'agreementCode',
    label: '合同编号',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
  },
  {
    field: 'huaZhuangShi',
    label: '化妆师',
    component: 'Input',
    required: false,
  },
  {
    field: 'mobile',
    label: '联系方式',
    component: 'Input',
    required: false,
  },
  {
    field: 'shiZhuangTime',
    label: '试妆时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'shiZhuangResult',
    label: '试妆结果登记',
    component: 'Input',
    required: false,
  },
  {
    field: 'secondShiZhuangResult',
    label: '第二次试妆结果登记',
    component: 'Input',
    required: false,
  },
  {
    field: 'sheXiangYaoQiu',
    label: '摄像要求',
    component: 'Input',
    required: false,
  },
  {
    field: 'sheYingYaoQiu',
    label: '摄影要求',
    component: 'Input',
    required: false,
  },
  {
    field: 'zhuShaCode',
    label: '主纱编号',
    component: 'Input',
    required: false,
  },
  {
    field: 'xiuHeCode',
    label: '秀禾编号',
    component: 'Input',
    required: false,
  },
  {
    field: 'chuMenShaCode',
    label: '出门纱编号',
    component: 'Input',
    required: false,
  },
  {
    field: 'lifuCode',
    label: '礼服编号',
    component: 'Input',
    required: false,
  },
  {
    field: 'banNiangFuCode',
    label: '伴娘服编号',
    component: 'Input',
    required: false,
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '新人要求备注',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
];

export const customerChatRecordInfoDetailSchema: DescItem[] = [
  {
    field: 'chatPersonName',
    label: '客户名',
  },
  {
    field: 'chatRealTime',
    label: '跟进时间',
  },
  {
    field: 'preNextChatTime',
    label: '预计下次跟进时间',
  },
  {
    field: 'chatTypeStr',
    label: '跟进方式',
  },
  {
    field: 'content',
    label: '沟通内容',
  },
];
