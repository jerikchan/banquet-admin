// import { isAccountExist } from '/@/api/demo/system';
// import { getTaskTypeList } from '/@/api/admin/beo';

import { getOrderList } from '/@/api/admin/beo';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '任务编号',
    dataIndex: 'taskCode',
    width: 120,
  },
  {
    title: '执行部门',
    dataIndex: 'deptName',
    width: 120,
  },
  {
    title: '执行时间',
    dataIndex: 'taskTime',
    width: 120,
  },
  {
    title: '任务状态',
    dataIndex: 'taskStatusStr',
    width: 120,
  },
  {
    title: '数据状态',
    dataIndex: 'statusStr',
    width: 120,
  },
  {
    title: 'beo订单',
    dataIndex: 'beoOrderId',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'beoTaskId',
    label: '所属BEO单',
    component: 'ApiSelect',
    componentProps: {
      api: getOrderList,
      labelField: 'orderCode',
      valueField: 'id',
    },
    colProps: { span: 8 },
  },
];

export const taskFormSchema: FormSchema[] = [
  {
    field: 'beoOrderId',
    label: 'BEO单',
    component: 'ApiSelect',
    componentProps: {
      api: getOrderList,
      labelField: 'orderCode',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'deptId',
    label: '执行部门',
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
    field: 'taskTime',
    label: '执行时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },

  {
    label: '执行内容',
    field: 'content',
    component: 'InputTextArea',
    required: true,
  },
];

export const taskAcceptFormSchema: FormSchema[] = [
  {
    field: 'beoOrderId',
    label: 'BEO单',
    component: 'ApiSelect',
    componentProps: {
      api: getOrderList,
      labelField: 'orderCode',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'deptId',
    label: '执行部门',
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
    field: 'taskTime',
    label: '执行时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },

  {
    label: '执行内容',
    field: 'content',
    component: 'InputTextArea',
    required: true,
  },
];

export const foodsColumn: BasicColumn[] = [
  {
    title: '菜名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 120,
  },
  {
    title: '菜数量',
    dataIndex: 'foodsNo',
    width: 120,
  },
];

export const orderFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '合同id',
    component: 'Input',
    componentProps: {
      disabled: true,
      // api: getContractList,
      // labelField: 'agreementCode',
      // valueField: 'id',
    },
    required: false,
    show: false,
  },
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
    field: 'banquetTheme',
    label: '宴会主题',
    component: 'Input',
    required: true,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'salesManName',
    label: '销售名称',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'salesManMobile',
    label: '销售联系电话',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'managerName',
    label: '管家名称',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'managerMobile',
    label: '管家联系方式',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
];

export const roomScheduleFormSchema: FormSchema[] = [
  {
    field: 'banquetTime',
    label: '时间',
    component: 'DatePicker',
    componentProps: {
      disabled: true,
      showTime: true,
    },
    required: false,
  },
  {
    field: 'roomName',
    label: '宴会厅',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'banquetType',
    label: '宴会类型',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'setUpType',
    label: '摆桌形式',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'deskCount',
    label: '桌数',
    component: 'InputNumber',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'backupDesk',
    label: '备桌数',
    component: 'InputNumber',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
];

export const beoTaskFormSchema: FormSchema[] = [
  {
    field: 'taskTime',
    label: '时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      disabled: true,
    },
    required: false,
  },
  {
    field: 'content',
    label: '执行内容',
    component: 'InputTextArea',
    required: false,
    componentProps: {
      disabled: true,
    },
    colProps: {
      offset: 2,
    },
  },
];

export const beoFinanceFormSchema: FormSchema[] = [
  {
    label: '收款人',
    field: 'receivableMan',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '预计总收款',
    field: 'preTotal',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '实收款',
    field: 'realTotal',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '定金',
    field: 'frontMoney',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '中款',
    field: 'midMoney',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '尾款',
    field: 'finalMoney',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
];
