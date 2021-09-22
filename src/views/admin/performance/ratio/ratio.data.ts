import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { h } from 'vue';
// import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '系数名称',
    dataIndex: 'name',
    width: 200,
    align: 'left',
  },
  {
    title: '起始时间',
    dataIndex: 'startTime',
    width: 200,
  },
  {
    title: '结束时间',
    dataIndex: 'endTime',
    width: 200,
  },
  {
    title: '系数值',
    dataIndex: 'ratio',
    width: 180,
  },
  {
    title: '活动系数',
    dataIndex: 'shakyRatio',
    width: 180,
  },
  {
    title: '完成系数',
    dataIndex: 'finishRatio',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '系数名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const updateFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '档期名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'ratio',
    label: '系数',
    component: 'Input',
    required: false,
  },
  // {
  //   field: 'shakyRatio',
  //   label: '活动系数',
  //   component: 'Input',
  //   required: false,
  // },
  // {
  //   field: 'finishRatio',
  //   label: '完成系数',
  //   component: 'Input',
  //   required: true,
  // },
  // {
  //   field: 'ratioTime',
  //   component: 'RangePicker',
  //   label: '档期时间',
  //   required: true,
  // },
  {
    field: 'banquetDate',
    label: '档期时间',
    component: 'DatePicker',
    componentProps: {
      showTime: false,
      disabled: true,
    },
    required: true,
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
