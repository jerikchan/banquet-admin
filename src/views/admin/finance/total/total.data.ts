// import { isAccountExist } from '/@/api/demo/system';
// import { getTotalTypeList } from '/@/api/admin/finance';
import { getContractList } from '/@/api/admin/contract';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '应收款编号',
    dataIndex: 'receivablesCode',
    width: 120,
  },
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
    width: 120,
  },
  {
    title: '预计总款额',
    dataIndex: 'preTotal',
    width: 120,
  },
  {
    title: '实收款',
    dataIndex: 'realTotal',
    width: 120,
  },
  {
    title: '最终收款时间',
    dataIndex: 'lastTime',
    width: 120,
  },
  {
    title: '定金',
    dataIndex: 'frontMoney',
    width: 120,
  },
  {
    title: '中款',
    dataIndex: 'midMoney',
    width: 120,
  },
  {
    title: '尾款',
    dataIndex: 'finalMoney',
    width: 120,
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

export const totalFormSchema: FormSchema[] = [
  {
    field: 'agreementId',
    label: '合同',
    component: 'ApiSelect',
    componentProps: {
      api: getContractList,
      labelField: 'id',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'lastTime',
    label: '最后收款时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },
  {
    label: '收款人',
    field: 'receivableMan',
    component: 'Input',
    required: true,
  },
  {
    label: '预计总款',
    field: 'preTotal',
    component: 'Input',
    required: true,
  },
  {
    label: '实际总款',
    field: 'realTotal',
    component: 'Input',
    required: true,
  },
  {
    label: '定金',
    field: 'frontMoney',
    component: 'Input',
    required: true,
  },
  {
    label: '中款',
    field: 'midMoney',
    component: 'Input',
    required: true,
  },
  {
    label: '尾款',
    field: 'finalMoney',
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
