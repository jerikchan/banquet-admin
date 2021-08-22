import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
    width: 180,
  },
  {
    title: '合同名称',
    dataIndex: 'agreementName',
    width: 180,
  },
  {
    title: '宴会厅房',
    dataIndex: 'banquetRoomName',
    width: 180,
  },
  {
    title: '保底桌数',
    dataIndex: 'floorsDeskCount',
    width: 180,
  },
  {
    title: '单桌价格',
    dataIndex: 'singlePrice',
    width: 180,
  },
  {
    title: '额外价格',
    dataIndex: 'extraPrice',
    width: 180,
  },
  {
    title: '备用桌数',
    dataIndex: 'backupDesk',
    width: 180,
  },
  {
    title: '定金',
    dataIndex: 'frontMoney',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '类型',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: [
        { label: '已读', value: '1' },
        { label: '未读', value: '0' },
      ],
    },
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
    label: '宴会厅房id',
    component: 'DatePicker',
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
    field: 'foods',
    label: '菜品(预留项)',
    component: 'InputTextArea',
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
  },
];
