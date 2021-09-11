// import { isAccountExist } from '/@/api/demo/system';
// import { getCommentTypeList } from '/@/api/admin/customer';
import { getCustomerList } from '/@/api/admin/customer';
import { getCommentTypeList } from '/@/api/admin/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { values } from 'lodash-es';

export const columns: BasicColumn[] = [
  {
    title: '客户名称',
    dataIndex: 'customerName',
    width: 120,
  },
  {
    title: '跟进时间',
    dataIndex: 'chatRealTime',
    width: 180,
  },
  {
    title: '跟进方式',
    dataIndex: 'chatTypeStr',
    width: 120,
  },
  {
    title: '内容',
    dataIndex: 'content',
    width: 300,
  },
  {
    title: '预计下次跟进时间',
    dataIndex: 'preNextChatTime',
    width: 180,
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
    field: 'chatRealTime',
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
      valueField: 'code',
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
    label: '是否邀约进店',
    field: 'isFirst',
    component: 'Switch',
    // dynamicDisabled: ({ values }) => {
    //   // debugger;
    //   return !!(values.isFirst === 'true');
    // },
    componentProps: {
      // ifShow: ({ values }) => {
      //   console.log(values);
      //   return false;
      // },
      // show: false,
    },
    // ifShow: values.isFirst,
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
    required: true,
  },
];
