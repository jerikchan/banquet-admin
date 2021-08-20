// import { isAccountExist } from '/@/api/demo/system';
// import { getCommentTypeList } from '/@/api/admin/customer';
import { getCustomerList } from '/@/api/admin/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '厅房名称',
    dataIndex: 'customerId',
    width: 120,
  },
  {
    title: '沟通时间',
    dataIndex: 'chatTime',
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
    label: '厅房名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const roomFormSchema: FormSchema[] = [
  {
    field: 'customerId',
    label: '厅房名称',
    component: 'ApiSelect',
    componentProps: {
      api: getCustomerList,
      labelField: 'customerName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'chatTime',
    label: '沟通时间',
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
