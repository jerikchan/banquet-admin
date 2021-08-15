import { isAccountExist } from '/@/api/demo/system';
import { getCustomerTypeList } from '/@/api/admin/customer';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '客户名',
    dataIndex: 'customerName',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'realName',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '客户类型',
    dataIndex: 'type',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'customerName',
    label: '客户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'realName',
    label: '昵称',
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
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value)
              .then(() => resolve())
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
      },
    ],
  },
  {
    label: '客户类型',
    field: 'type',
    component: 'ApiSelect',
    componentProps: {
      api: getCustomerTypeList,
      labelField: 'label',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'realName',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
