// import { isAccountExist } from '/@/api/demo/system';
// import { getOrderTypeList } from '/@/api/admin/beo';
import { getAccountList } from '/@/api/admin/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '订单编号',
    dataIndex: 'orderCode',
    width: 120,
  },
  {
    title: '宴会主题',
    dataIndex: 'banquetTheme',
    width: 120,
  },
  {
    title: '宴会时间',
    dataIndex: 'banquetTime',
    width: 120,
  },
  {
    title: '管家',
    dataIndex: 'managerName',
    width: 120,
  },
  {
    title: '销售名',
    dataIndex: 'salesManName',
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
    field: 'beoName',
    label: '客户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const orderFormSchema: FormSchema[] = [
  {
    label: '订单名称',
    field: 'orderName',
    component: 'Input',
    required: false,
  },
  {
    label: '宴会主题',
    field: 'banquetTheme',
    component: 'Input',
    required: true,
  },
  {
    field: 'managerId',
    label: '选择管家',
    component: 'ApiSelect',
    componentProps: {
      api: getAccountList,
      labelField: 'realName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'salesManId',
    label: '选择销售',
    component: 'ApiSelect',
    componentProps: {
      api: getAccountList,
      labelField: 'realName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'banquetTime',
    label: '宴会时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },

  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    required: true,
  },
];
