// import { isAccountExist } from '/@/api/demo/system';
// import { getOrderTypeList } from '/@/api/admin/beo';
import { getContractList } from '/@/api/admin/contract';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '订单编号',
    dataIndex: 'orderCode',
    width: 120,
  },
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
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
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'agreementId',
    label: '合同编号',
    component: 'ApiSelect',
    componentProps: {
      // disabled: true,
      api: getContractList,
      labelField: 'agreementCode',
      valueField: 'id',
    },
    colProps: { span: 8 },
  },
  {
    field: 'banquetTheme',
    label: '宴会主题',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const orderFormSchema: FormSchema[] = [
  {
    field: 'agreementId',
    label: '合同编号',
    component: 'ApiSelect',
    componentProps: {
      // disabled: true,
      api: getContractList,
      labelField: 'agreementCode',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'banquetTheme',
    label: '宴会主题',
    component: 'Input',
    required: true,
  },
  {
    field: 'extraPrice',
    label: '额外费用',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'beforeDiscountTotal',
    label: '优惠前总价',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'afterDiscountTotal',
    label: '优惠后总价',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'frontMoney',
    label: '定金',
    component: 'InputNumber',
    required: true,
  },
];
