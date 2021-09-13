import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';

export const columns: BasicColumn[] = [
  {
    title: '宴会日期',
    dataIndex: 'banquetTime',
    width: 120,
  },
  {
    title: '主家姓名',
    dataIndex: 'customerName',
    width: 120,
  },
  {
    title: '销售姓名',
    dataIndex: 'salesManName',
    width: 120,
  },
  {
    title: '宴会厅',
    dataIndex: 'banquetRoomName',
    width: 120,
  },
  {
    title: '联系电话',
    dataIndex: 'customerMobile',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'customerName',
    label: '主家名称',
    component: 'Input',
    // componentProps: {
    //   // disabled: true,
    //   api: getContractList,
    //   labelField: 'agreementCode',
    //   valueField: 'id',
    // },
    colProps: { span: 8 },
  },
  {
    field: 'salesManName',
    label: '销售员',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const basicFormInfoSchema: FormSchema[] = [
  {
    field: 'banquetTime',
    label: '宴会日期',
    component: 'DatePicker',
    componentProps: {
      disabled: false,
      showTime: true,
    },
    colProps: { span: 6 },
  },
  {
    field: 'customerName',
    component: 'Input',
    label: '主家姓名',
    required: false,
    componentProps: {},
    colProps: {
      offset: 2,
      span: 6,
    },
  },
  {
    field: 'salesManName',
    component: 'Input',
    label: '销售员',
    required: false,
    componentProps: {},
    colProps: {
      offset: 2,
      span: 6,
    },
  },
  {
    field: 'banquetRoomName',
    component: 'Input',
    label: '宴会厅',
    required: false,
    colProps: { span: 6 },
  },
  {
    field: 'customerMobile',
    component: 'Input',
    label: '联系电话',
    required: false,
    componentProps: {},
    colProps: {
      offset: 2,
      span: 6,
    },
  },
  {
    field: 'roomLeader',
    component: 'Input',
    label: '宴会厅厅长',
    required: false,
    componentProps: {},
    colProps: {
      offset: 2,
      span: 6,
    },
  },
  {
    field: 'restDesk',
    component: 'InputNumber',
    label: '余留桌数',
    required: false,
    componentProps: {},
    colProps: {
      span: 6,
    },
  },
];

export const firstFormSchema: FormSchema[] = [
  {
    field: 'firstStandard',
    component: 'Input',
    label: '余留餐标准',
    required: false,
    componentProps: {},
    colProps: {
      span: 6,
    },
  },
  {
    field: 'firstUseMealPlace',
    component: 'Input',
    label: '用餐场地',
    required: false,
    colProps: {
      span: 6,
      offset: 2,
    },
  },
  {
    field: 'firstUseMealLeader',
    component: 'Input',
    label: '用餐负责人',
    required: false,
    componentProps: {},
    colProps: {
      span: 6,
    },
  },
];

export const secondFormSchema: FormSchema[] = [
  {
    field: 'secondMealDesk',
    component: 'InputNumber',
    label: '余留餐桌数',
    required: false,
    colProps: { span: 6 },
  },
  {
    field: 'secondStandard',
    component: 'Input',
    label: '余留餐标准',
    required: false,
    componentProps: {},
    colProps: {
      offset: 2,
      span: 6,
    },
  },
  {
    field: 'secondUseMealPlace',
    component: 'Input',
    label: '用餐场地',
    required: false,
    colProps: {
      span: 6,
      offset: 2,
    },
  },
  {
    field: 'secondUseMealLeader',
    component: 'Input',
    label: '用餐负责人',
    required: false,
    componentProps: {},
    colProps: {
      span: 6,
    },
  },
];

export const restFoodFormSchema: FormSchema[] = [
  {
    field: 'coldDish',
    component: 'InputTextArea',
    label: '凉菜',
    required: false,
    colProps: { span: 20 },
  },
  {
    field: 'hotDish',
    component: 'InputTextArea',
    label: '热菜',
    required: false,
    componentProps: {},
    colProps: { span: 20 },
  },
  {
    field: 'snackAndSoup',
    component: 'InputTextArea',
    label: '点心、汤',
    required: false,
    componentProps: {},
    colProps: { span: 20 },
  },
  {
    field: 'other',
    component: 'InputTextArea',
    label: '其他',
    required: false,
    colProps: { span: 20 },
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '备注',
    required: false,
    componentProps: {},
    colProps: { span: 20 },
  },
];

export const restMealDetailFormSchema: DescItem[] = [
  {
    field: 'banquetTime',
    label: '宴会日期',
  },
  {
    field: 'customerName',
    label: '主家姓名',
  },
  {
    field: 'salesManName',
    label: '销售员',
  },
  {
    field: 'banquetRoomName',
    label: '宴会厅',
  },
  {
    field: 'customerMobile',
    label: '联系电话',
  },
  {
    field: 'roomLeader',
    label: '宴会厅厅长',
  },
  {
    field: 'restDesk',
    label: '余留桌',
  },
];

export const restUserMealDetailFormSchema: DescItem[] = [
  {
    field: 'firstStandard',
    label: '用餐标准',
  },
  {
    field: 'firstUseMealPlace',
    label: '用餐场地',
  },
  {
    field: 'firstUseMealLeader',
    label: '用餐负责人',
  },
];

export const restFoodsMealDetailFormSchema: DescItem[] = [
  {
    field: 'coldDish',
    label: '凉菜',
  },
  {
    field: 'hotDish',
    label: '热菜',
  },
  {
    field: 'snackAndSoup',
    label: '点心、汤',
  },
  {
    field: 'other',
    label: '其他',
  },
  {
    field: 'remark',
    label: '备注',
  },
];
