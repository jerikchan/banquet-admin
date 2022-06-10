import {
  getCustomerTypeList,
  getCancelDirectionList,
  getCancelResonList,
} from '/@/api/admin/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getSalesList } from '/@/api/admin/system';
import { getChannelList } from '/@/api/admin/customer';
import { getCommentTypeList } from '/@/api/admin/customer';
import { DescItem } from '/@/components/Description/index';
import {
  getMealTypeList,
  getBanquetTypeList,
  getRoomList,
  getScheduleTypeList,
} from '/@/api/admin/banquet';

export const columns: BasicColumn[] = [
  {
    title: '客户名',
    dataIndex: 'customerName',
    width: 200,
  },
  {
    title: '跟进销售',
    dataIndex: 'salesManagerName',
    width: 120,
  },
  {
    title: '客户类型',
    dataIndex: 'customerTypeStr',
    width: 120,
  },
  {
    title: '联系电话',
    dataIndex: 'customerMobile',
    width: 120,
  },
  {
    title: '获客渠道',
    dataIndex: 'customerSource',
    width: 150,
  },
  {
    title: '是否邀约进店',
    dataIndex: 'isFirstStr',
    width: 80,
  },
  {
    title: '获客时间',
    dataIndex: 'createTime',
    width: 200,
  },
  {
    title: '意向时间',
    dataIndex: 'banquetTime',
    width: 200,
  },
  {
    title: '客户状态',
    dataIndex: 'statusStr',
    width: 200,
  },
  {
    title: '意向厅',
    dataIndex: 'banquetRoom',
    width: 120,
  },
  {
    title: '是否已下beo单',
    dataIndex: 'hasBeoOrderStr',
    width: 80,
  },
  {
    title: '桌数',
    dataIndex: 'floorsDeskCount',
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
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'customerName',
    label: '客户名',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    field: 'salesName',
    label: '销售名',
    component: 'ApiSelect',
    componentProps: {
      api: getSalesList,
      labelField: 'realName',
      valueField: 'realName',
      disabled: false,
    },
    colProps: { span: 5 },
  },
  {
    label: '客户号码',
    field: 'customerMobile',
    component: 'Input',
    colProps: { span: 5 },
  },
];

export const customerFormSchema: FormSchema[] = [
  {
    field: 'customerName',
    label: '客户名',
    component: 'Input',
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
      api: getCustomerTypeList,
      labelField: 'label',
      valueField: 'id',
      disabled: true,
    },
    required: false,
  },
  {
    label: '获客渠道',
    field: 'customerSource',
    component: 'ApiSelect',
    componentProps: {
      api: getChannelList,
      labelField: 'label',
      valueField: 'code',
    },
    required: true,
  },
  {
    label: '客户号码',
    field: 'customerMobile',
    component: 'Input',
    required: true,
  },
  // {
  //   label: '是否进店',
  //   field: 'isIn',
  //   component: 'Switch',
  // },
  {
    field: 'inDate',
    label: '进店日期',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
  },
  {
    label: '餐标',
    field: 'canBiao',
    component: 'ApiSelect',
    componentProps: {
      api: getMealTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: false,
  },
  {
    field: 'banquetType',
    label: '宴会类型',
    component: 'ApiSelect',
    componentProps: {
      api: getBanquetTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: false,
  },
  {
    field: 'banquetTime',
    label: '意向日期',
    component: 'DatePicker',
  },
  {
    field: 'roomId',
    label: '意向厅房',
    component: 'ApiSelect',
    componentProps: {
      api: getRoomList,
      labelField: 'roomName',
      valueField: 'id',
    },
    required: false,
  },
  {
    field: 'floorsDeskCount',
    label: '意向桌数',
    component: 'InputNumber',
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
    field: 'createTime',
    label: '获客时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
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
    field: 'chatRealTime',
    label: '本次跟进时间',
    component: 'DatePicker',
    required: true,
  },
  {
    field: 'preNextChatTime',
    label: '预计下次跟进日',
    component: 'DatePicker',
    required: true,
  },
  {
    field: 'chatType',
    label: '沟通方式',
    component: 'ApiSelect',
    componentProps: {
      api: getCommentTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: true,
  },
  {
    label: '是否邀约进店',
    field: 'isFirst',
    component: 'Switch',
    componentProps: {
      ifShow: ({ values }) => {
        console.log(values.isFirst);
        return false;
      },
      // show: false,
    },
  },
  // {
  //   label: '是否标记为待办',
  //   field: 'isToDone',
  //   component: 'Switch',
  //   componentProps: {
  //     ifShow: ({ values }) => {
  //       console.log(values.isToDone);
  //       return false;
  //     },
  //     // show: false,
  //   },
  // },
  {
    field: 'nodeRemark',
    label: '跟进内容',
    component: 'InputTextArea',
    required: true,
  },
  {
    field: 'roomId',
    label: '意向厅房',
    component: 'ApiSelect',
    componentProps: {
      api: getRoomList,
      labelField: 'roomName',
      valueField: 'id',
    },
    required: false,
  },
  {
    field: 'banquetType',
    label: '宴会类型',
    component: 'ApiSelect',
    componentProps: {
      api: getBanquetTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: false,
  },
  {
    field: 'canBie',
    label: '餐别',
    component: 'ApiSelect',
    componentProps: {
      api: getScheduleTypeList,
      labelField: 'label',
      valueField: 'value',
    },
    required: false,
  },
  {
    field: 'banquetTime',
    label: '意向日期',
    component: 'DatePicker',
  },
  {
    field: 'floorsDeskCount',
    label: '意向桌数',
    component: 'InputNumber',
  },
  {
    label: '餐标',
    field: 'canBiao',
    component: 'ApiSelect',
    componentProps: {
      api: getMealTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: false,
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

export const customerCancelFormSchema: FormSchema[] = [
  {
    field: 'cancelDirection',
    label: '流失去向',
    component: 'ApiSelect',
    componentProps: {
      api: getCancelDirectionList,
      labelField: 'label',
      valueField: 'code',
    },
    required: true,
  },
  {
    field: 'cancelReason',
    label: '流失原因',
    component: 'ApiSelect',
    componentProps: {
      api: getCancelResonList,
      labelField: 'label',
      valueField: 'code',
    },
    required: true,
  },
  // {
  //   field: 'remark',
  //   label: '备注',
  //   component: 'InputTextArea',
  //   required: false,
  // },
];

export const InvalidReasonFormSchema: FormSchema[] = [
  {
    field: 'invalidReason',
    label: '无效原因',
    component: 'InputTextArea',
    required: true,
  },
];

export const customerChatRecordInfoDetailSchema: DescItem[] = [
  {
    field: 'chatPersonName',
    label: '客户名',
  },
  {
    field: 'chatRealTime',
    label: '跟进时间',
  },
  {
    field: 'preNextChatTime',
    label: '预计下次跟进时间',
  },
  {
    field: 'chatTypeStr',
    label: '跟进方式',
  },
  {
    field: 'content',
    label: '沟通内容',
  },
];
