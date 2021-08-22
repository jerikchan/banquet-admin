import { getRoomList } from '/@/api/admin/banquet';
import { getAddCustomerTypeList } from '/@/api/admin/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getSalesList } from '/@/api/admin/system';

export const columns: BasicColumn[] = [
  {
    title: '客户名',
    dataIndex: 'customerName',
    width: 120,
  },
  {
    title: '跟进销售',
    dataIndex: 'salesManagerName',
    width: 120,
  },
  {
    title: '意向宴会时间',
    dataIndex: 'purposeTime',
    width: 120,
  },
  {
    title: '联系电话',
    dataIndex: 'customerMobile',
    width: 120,
  },
  {
    title: '第二联系人',
    dataIndex: 'secondMan',
    width: 120,
  },
  {
    title: '第二联系人号码',
    dataIndex: 'secondManMobile',
    width: 120,
  },
  {
    title: '客户类型',
    dataIndex: 'customerType',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'customerName',
    label: '客户名',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const customerFormSchema: FormSchema[] = [
  {
    field: 'customerName',
    label: '客户名',
    component: 'Input',
    helpMessage: ['本字段演示异步验证', '不能输入带有admin的客户名'],
    rules: [
      {
        required: true,
        message: '请输入客户名',
      },
    ],
  },
  {
    label: '客户类型',
    field: 'customerType',
    component: 'ApiSelect',
    componentProps: {
      api: getAddCustomerTypeList,
      labelField: 'label',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '客户号码',
    field: 'customerMobile',
    component: 'Input',
    required: true,
  },
  {
    field: 'purposeTime',
    label: '意向日期',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
  },
  {
    label: '第二联系人',
    field: 'secondMan',
    component: 'Input',
    required: false,
  },
  {
    label: '第二联系人号码',
    field: 'secondManMobile',
    component: 'Input',
    required: false,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    required: false,
  },
];

export const customerTypeFormSchema: FormSchema[] = [
  {
    field: 'nodeRemark',
    label: '节点备注',
    component: 'InputTextArea',
  },
];

export const contractFormSchema: FormSchema[] = [
  {
    field: 'customerId',
    label: '客户',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: true,
  },
  {
    field: 'mobile',
    label: '电话',
    component: 'Input',
  },
  {
    field: 'banquetTime',
    label: '宴会日期',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
  },
  {
    field: 'banquetRoomId',
    label: '宴会厅房',
    component: 'ApiSelect',
    componentProps: {
      api: getRoomList,
      labelField: 'roomName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'floorsDeskCount',
    label: '保底桌数',
    component: 'InputNumber',
  },
  {
    field: 'singlePrice',
    label: '单桌价格',
    component: 'InputNumber',
  },
  {
    field: 'banquetPrice',
    label: '宴会价格',
    component: 'InputNumber',
  },
  {
    field: 'extraPrice',
    label: '格外费用',
    component: 'InputNumber',
  },
  {
    field: 'beforeDiscountTotal',
    label: '优惠前总价',
    component: 'InputNumber',
  },
  {
    field: 'afterDiscountTotal',
    label: '优惠后总价',
    component: 'InputNumber',
  },
  {
    field: 'backupDesk',
    label: '备用桌数',
    component: 'InputNumber',
  },
  {
    field: 'frontMoney',
    label: '定金',
    component: 'InputNumber',
  },
  {
    field: 'status',
    label: '合同状态',
    component: 'Select',
    componentProps: {
      disabled: true,
      options: [
        {
          label: '未审核',
          value: '0',
        },
        {
          label: '审核中',
          value: '1',
        },
        {
          label: '审核不通过',
          value: '3',
        },
        {
          label: ' 审核通过',
          value: '5',
        },
      ],
    },
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
  },
];

export const customerAllocationFormSchema: FormSchema[] = [
  {
    field: 'salesManagerId',
    label: '销售',
    component: 'ApiSelect',
    componentProps: {
      api: getSalesList,
      labelField: 'realName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
  },
];
