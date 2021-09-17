import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { h } from 'vue';
// import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
    width: 200,
    align: 'left',
  },
  {
    title: '表名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    width: 200,
  },
  {
    title: '宴会时间',
    dataIndex: 'banquetTime',
    width: 150,
  },
  {
    title: '宴会厅房',
    dataIndex: 'banquetRoomName',
    width: 150,
  },
  {
    title: '宴会类型',
    dataIndex: 'banquetType',
    width: 120,
  },
  {
    title: '所属销售',
    dataIndex: 'salesManName',
    width: 200,
  },
  {
    title: '所属管家',
    dataIndex: 'managerName',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'agreementCode',
    label: '合同编号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'deptName',
    label: '部门名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentId',
    label: '上级部门',
    component: 'TreeSelect',

    componentProps: {
      replaceFields: {
        title: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];

export const customerFollowFormSchema: FormSchema[] = [
  {
    field: 'setMealTime',
    label: '套餐登记内容时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'sendPersonTime',
    label: '人员派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
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
    field: 'siYiTime',
    label: '司仪沟通登记表时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'familyMeetingTime',
    label: '家庭会议登记时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'attentionTime',
    label: '婚礼注意事项筛查登记时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
];

export const setMealContentFormSchema: FormSchema[] = [
  {
    field: 'siYi',
    component: 'InputTextArea',
    label: '司仪',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'genZhuang',
    component: 'InputTextArea',
    label: '跟妆',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'sheYing',
    component: 'InputTextArea',
    label: '摄影',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'sheXiang',
    component: 'InputTextArea',
    label: '摄像',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'kuaiJian',
    component: 'InputTextArea',
    label: '快剪',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'yanYi',
    component: 'InputTextArea',
    label: '演绎',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'dengGuang',
    component: 'InputTextArea',
    label: '灯光',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'otherPerson',
    component: 'InputTextArea',
    label: '其他人员',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'daPing',
    component: 'InputTextArea',
    label: '大屏',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'zhuiGuangDengShuLiang',
    component: 'InputTextArea',
    label: '追光灯数量',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'yinXiang',
    component: 'InputTextArea',
    label: '音响',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'yaoBi',
    component: 'InputTextArea',
    label: '摇臂',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  {
    field: 'yingBinQu',
    component: 'InputTextArea',
    label: '迎宾区',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  // {
  //   field: 'yingBinQuId',
  //   component: 'Input',
  //   label: '迎宾区凭证',
  //   slot: 'yingBinQuId',
  // },
  {
    field: 'qianDaoQu',
    component: 'InputTextArea',
    label: '签到区',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  // {
  //   field: 'qianDaoQuId',
  //   component: 'Input',
  //   label: '签到区凭证',
  //   slot: 'qianDaoQuId',
  // },
  {
    field: 'yiShiQu',
    component: 'InputTextArea',
    label: '仪式区',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  // {
  //   field: 'yiShiQuId',
  //   component: 'Input',
  //   label: '仪式区凭证',
  //   slot: 'yiShiQuId',
  // },
  {
    field: 'wuTaiQu',
    component: 'InputTextArea',
    label: '舞台区',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  // {
  //   field: 'wuTaiQuId',
  //   component: 'Input',
  //   label: '舞台区凭证',
  //   slot: 'wuTaiQuId',
  // },
  {
    field: 'caoPing',
    component: 'InputTextArea',
    label: '草坪',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
  // {
  //   field: 'caoPingId',
  //   component: 'Input',
  //   label: '草坪区凭证',
  //   slot: 'caoPingId',
  // },
  {
    field: 'tianPin',
    component: 'InputTextArea',
    label: '甜品',
    componentProps: {
      placeholder: '',
      rows: 2,
    },
    required: false,
  },
];

export const sendPersonFormSchema: FormSchema[] = [
  {
    field: 'siYi',
    label: '司仪',
    component: 'Input',
    required: false,
  },
  {
    field: 'siYiTime',
    label: '司仪派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'genZhuang',
    label: '跟妆',
    component: 'Input',
    required: false,
  },
  {
    field: 'genZhuangTime',
    label: '跟妆派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'sheYing',
    label: '摄影',
    component: 'Input',
    required: false,
  },
  {
    field: 'sheYingTime',
    label: '摄影派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'sheXiang',
    label: '摄像',
    component: 'Input',
    required: false,
  },
  {
    field: 'sheXiangTime',
    label: '摄像派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'kuaiJian',
    label: '快剪',
    component: 'Input',
    required: false,
  },
  {
    field: 'kuaiJianTime',
    label: '快剪派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'yanYi',
    label: '演绎',
    component: 'Input',
    required: false,
  },
  {
    field: 'yanYiTime',
    label: '演绎派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'trussJia',
    label: 'TRUSS架',
    component: 'Input',
    required: false,
  },
  {
    field: 'trussJiaTime',
    label: 'TRUSS架派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'daPing',
    label: '大屏',
    component: 'Input',
    required: false,
  },
  {
    field: 'daPingTime',
    label: '大屏派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'dengGuang',
    label: '灯光',
    component: 'Input',
    required: false,
  },
  {
    field: 'dengGuangTime',
    label: '灯光派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'zhuiGuangDeng',
    label: '追光灯',
    component: 'Input',
    required: false,
  },
  {
    field: 'zhuiGuangDengTime',
    label: '追光灯派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'yinXiang',
    label: '音响',
    component: 'Input',
    required: false,
  },
  {
    field: 'yinXiangTime',
    label: '音响派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'yaoBi',
    label: '摇臂',
    component: 'Input',
    required: false,
  },
  {
    field: 'yaoBiTime',
    label: '摇臂派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'hunChe',
    label: '婚车',
    component: 'Input',
    required: false,
  },
  {
    field: 'hunCheTime',
    label: '婚车派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'gongRen',
    label: '工人',
    component: 'Input',
    required: false,
  },
  {
    field: 'gongRenTime',
    label: '工人派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'qiQiu',
    label: '气球',
    component: 'Input',
    required: false,
  },
  {
    field: 'qiQiuTime',
    label: '气球派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'yiShiXianHua',
    label: '仪式鲜花',
    component: 'Input',
    required: false,
  },
  {
    field: 'yiShiXianHuaTime',
    label: '仪式鲜花派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'huiChangHuaYi',
    label: '会场花艺',
    component: 'Input',
    required: false,
  },
  {
    field: 'huiChangHuaYiTime',
    label: '会场花艺派单时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
];

export const tryOnMakeUpFormSchema: FormSchema[] = [
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

export const siYiChatFormSchema: FormSchema[] = [
  {
    field: 'siYi',
    label: '司仪',
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
    field: 'yiShiLiuCheng',
    label: '仪式流程',
    component: 'Input',
    required: false,
  },
  {
    field: 'zhengHunRen',
    label: '证婚人',
    component: 'Input',
    required: false,
  },
  {
    field: 'jiaZhangDaiBiao',
    label: '家长代表',
    component: 'Input',
    required: false,
  },
  {
    field: 'yiShiDaoJu',
    label: '仪式道具',
    component: 'Input',
    required: false,
  },
  {
    field: 'binXiangTuan',
    label: '傧相团',
    component: 'Input',
    required: false,
  },
  {
    field: 'qinPengCaiYi',
    label: '亲朋才艺',
    component: 'Input',
    required: false,
  },
  {
    field: 'yiShiXianHua',
    label: '仪式鲜花定版',
    component: 'Input',
    required: false,
  },
  {
    field: 'dianZiQingTie',
    label: '是否需要制作电子请帖',
    component: 'Input',
    required: false,
  },
  {
    field: 'xiWeiTu',
    label: '是否需要制作席位图',
    component: 'Input',
    required: false,
  },
  {
    field: 'haiBao',
    label: '是否需要制作海报',
    component: 'Input',
    required: false,
  },
  {
    field: 'dianZiXiangCe',
    label: '是否需要制作电子相册',
    component: 'Input',
    required: false,
  },
  {
    field: 'taiKa',
    label: '是否需要制作台卡',
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

export const familyMeetingFormSchema: FormSchema[] = [
  {
    field: 'finishTime',
    label: '会议完成时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '新人要求备注',
    componentProps: {
      placeholder: '',
      rows: 4,
    },
    required: false,
  },
];

export const attentionCheckFormSchema: FormSchema[] = [
  {
    field: 'yiShiCaiPaiTime',
    label: '仪式彩排时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'siYiCaiPaiTimeId',
  //   label: '仪式彩排时间凭证',
  //   component: 'Input',
  //   slot: 'siYiCaiPaiTimeId',
  // },
  {
    field: 'siYiDaoDaTime',
    label: '司仪到达时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'siYiDaoDaTimeId',
  //   label: '司仪到达时间凭证',
  //   component: 'Input',
  //   slot: 'siYiDaoDaTimeId',
  // },
  {
    field: 'huaZhuangShiTime',
    label: '化妆师到场时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'huaZhuangShiTimeId',
  //   label: '化妆师到场时间凭证',
  //   component: 'Input',
  //   slot: 'huaZhuangShiTimeId',
  // },
  {
    field: 'sheYingShiTime',
    label: '摄影师到达时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'sheYingShiTimeId',
  //   label: '摄影师到达时间凭证',
  //   component: 'Input',
  //   slot: 'sheYingShiTimeId',
  // },
  {
    field: 'sheXiangShiTime',
    label: '摄像师到达时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'sheXiangShiTimeId',
  //   label: '摄像师到达时间凭证',
  //   component: 'Input',
  //   slot: 'sheXiangShiTimeId',
  // },
  {
    field: 'xinRenDiZhi',
    label: '新人地址',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'xinRenDiZhiId',
  //   label: '新人地址凭证',
  //   component: 'Input',
  //   slot: 'xinRenDiZhiId',
  // },
  {
    field: 'hunCheTime',
    label: '婚车到达时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'hunCheTimeId',
  //   label: '婚车到达时间凭证',
  //   component: 'Input',
  //   slot: 'hunCheTimeId',
  // },
  {
    field: 'xiWeiContent',
    label: '席位图制作情况',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'xiWeiContentId',
  //   label: '席位图制作情况凭证',
  //   component: 'Input',
  //   slot: 'xiWeiContentId',
  // },
  {
    field: 'haiBao',
    label: '海报制作情况',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'haiBaoId',
  //   label: '海报制作情况凭证',
  //   component: 'Input',
  //   slot: 'haiBaoId',
  // },
  {
    field: 'taiKa',
    label: '台卡制作情况',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'taiKaId',
  //   label: '台卡制作情况凭证',
  //   component: 'Input',
  //   slot: 'taiKaId',
  // },
  {
    field: 'zhiShiPai',
    label: '指示牌制作情况',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'zhiShiPaiId',
  //   label: '指示牌制作情况凭证',
  //   component: 'Input',
  //   slot: 'zhiShiPaiId',
  // },
  {
    field: 'midMoney',
    label: '中期款收取情况',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'midMoneyId',
  //   label: '中期款收取情况凭证',
  //   component: 'Input',
  //   slot: 'midMoneyId',
  // },
  {
    field: 'yiShiDaoJu',
    label: '仪式道具准备情况',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'yiShiDaoJuId',
  //   label: '仪式道具准备情况凭证',
  //   component: 'Input',
  //   slot: 'yiShiDaoJuId',
  // },
  {
    field: 'hunCheHuaTime',
    label: '婚车花扎花时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'hunCheHuaTimeId',
  //   label: '婚车花扎花时间凭证',
  //   component: 'Input',
  //   slot: 'hunCheHuaTimeId',
  // },
  {
    field: 'qinPengCaiYi',
    label: '亲朋才艺音乐准备情况',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'qinPengCaiYiId',
  //   label: '亲朋才艺音乐准备情况凭证',
  //   component: 'Input',
  //   slot: 'qinPengCaiYiId',
  // },
  {
    field: 'daJianTime',
    label: '搭建团队搭建时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  // {
  //   field: 'daJianTimeId',
  //   label: '搭建团队搭建时间凭证',
  //   component: 'Input',
  //   slot: 'daJianTimeId',
  // },
];
