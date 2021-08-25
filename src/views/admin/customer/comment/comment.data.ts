// import { isAccountExist } from '/@/api/demo/system';
// import { getCommentTypeList } from '/@/api/admin/customer';
import { getCustomerList } from '/@/api/admin/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getCommentTypeList } from '/@/api/admin/customer';

export const columns: BasicColumn[] = [
  {
    title: '客户名称',
    dataIndex: 'chatPersonName',
    width: 120,
  },
  {
    title: '跟进时间',
    dataIndex: 'chatTime',
    width: 120,
  },
  {
    title: '跟进方式',
    dataIndex: 'chatTypeStr',
    width: 120,
  },
  {
    title: '内容',
    dataIndex: 'content',
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
    field: 'customerName',
    label: '客户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const commentFormSchema: FormSchema[] = [
  {
    field: 'customerId',
    label: '客户名称',
    component: 'ApiSelect',
    componentProps: {
      api: getCustomerList,
      labelField: 'customerName',
      valueField: 'id',
      disabled: false,
    },
    required: true,
  },
  {
    field: 'chatTime',
    label: '跟进时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },
  {
    label: '跟进方式',
    field: 'chatType',
    component: 'ApiSelect',
    componentProps: {
      api: getCommentTypeList,
      labelField: 'label',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '预计下次跟进',
    field: 'preNextChatTime',
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
