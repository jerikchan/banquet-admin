// import { isAccountExist } from '/@/api/demo/system';
import { getReturnTypeList } from '/@/api/admin/finance';
import { getTotalList } from '/@/api/admin/finance';
// import {  } from '/@/api/admin/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '回款单编号',
    dataIndex: 'returnCode',
    width: 120,
  },
  {
    title: '回款时间',
    dataIndex: 'returnTime',
    width: 120,
  },
  {
    title: '回款人',
    dataIndex: 'returnMan',
    width: 120,
  },
  {
    title: '回款金额',
    dataIndex: 'returnMoney',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'financeName',
    label: '客户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const acceptFormSchema: FormSchema[] = [
  {
    field: 'receivableId',
    label: '应收款单',
    component: 'ApiSelect',
    componentProps: {
      api: getTotalList,
      labelField: 'id',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'returnTime',
    label: '回款时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },
  {
    field: 'returnMan',
    label: '回款人',
    component: 'Input',
    required: true,
  },
  {
    field: 'returnType',
    label: '款项类型',
    component: 'ApiSelect',
    componentProps: {
      api: getReturnTypeList,
      labelField: 'id',
      valueField: 'id',
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
