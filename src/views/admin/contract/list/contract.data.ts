import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getMealTypeList, getFoodList } from '/@/api/admin/contract';
import { getRoomList, getBanquetList } from '/@/api/admin/banquet';
import { uploadPicApi } from '/@/api/sys/upload';

export const columns: BasicColumn[] = [
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
    width: 180,
  },
  {
    title: '宴会厅房',
    dataIndex: 'banquetRoomName',
    width: 180,
  },
  {
    title: '餐别',
    dataIndex: 'scheduleTypeStr',
    width: 180,
  },
  {
    title: '菜单菜品',
    dataIndex: 'foodStr',
    width: 180,
  },
  {
    title: '保底桌数',
    dataIndex: 'floorsDeskCount',
    width: 90,
  },
  {
    title: '单桌价格',
    dataIndex: 'singlePrice',
    width: 90,
  },
  {
    title: '额外价格',
    dataIndex: 'extraPrice',
    width: 90,
  },
  {
    title: '备用桌数',
    dataIndex: 'backupDesk',
    width: 90,
  },
  {
    title: '定金',
    dataIndex: 'frontMoney',
    width: 90,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 90,
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
    required: true,
  },
  {
    field: 'banquetSchedule',
    label: '宴会档期',
    component: 'ApiSelect',
    componentProps: {
      api: getBanquetList,
      labelField: 'roomName',
      valueField: 'id',
    },
    required: true,
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
    label: '餐别',
    field: 'scheduleType',
    component: 'ApiSelect',
    componentProps: {
      api: getMealTypeList,
      labelField: 'label',
      valueField: 'id',
    },
    required: false,
  },
  {
    label: '菜单菜品',
    field: 'food',
    component: 'ApiTreeSelect',
    componentProps: {
      api: getFoodList,
      replaceFields: {
        title: 'name',
        value: 'id',
      },
    },
    required: false,
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
    field: 'file',
    label: '合同照片',
    component: 'Upload',
    componentProps: {
      api: uploadPicApi,
      accept: ['png', 'jpg', 'jpeg'],
    },
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
  },
];
