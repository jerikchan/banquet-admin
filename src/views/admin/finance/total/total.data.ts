// import { isAccountExist } from '/@/api/demo/system';
// import { getTotalTypeList } from '/@/api/admin/finance';
import { getContractList } from '/@/api/admin/contract';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getReturnTypeList } from '/@/api/admin/finance';

export const columns: BasicColumn[] = [
  // {
  //   title: '单据编号',
  //   dataIndex: 'code',
  //   width: 120,
  // },
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
    width: 120,
  },
  {
    title: '单据类型',
    dataIndex: 'dataType',
    width: 120,
  },
  {
    title: '回款类型',
    dataIndex: 'returnType',
    width: 120,
  },
  {
    title: '回款金额',
    dataIndex: 'returnMoney',
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
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
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
  {
    title: '额外费用',
    dataIndex: 'extraMoney',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'statusStr',
    width: 120,
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

export const acceptFormSchema: FormSchema[] = [
  {
    field: 'code',
    label: '对应应收款',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
  },
  {
    field: 'agreementCode',
    label: '对应合同',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
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
      valueField: 'value',
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
    required: false,
  },
];
