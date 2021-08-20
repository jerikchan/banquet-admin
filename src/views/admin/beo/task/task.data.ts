// import { isAccountExist } from '/@/api/demo/system';
// import { getTaskTypeList } from '/@/api/admin/beo';

import { getOrderList } from '/@/api/admin/beo';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '任务编号',
    dataIndex: 'taskCode',
    width: 120,
  },
  {
    title: '执行部门',
    dataIndex: 'deptName',
    width: 120,
  },
  {
    title: '执行时间',
    dataIndex: 'taskTime',
    width: 120,
  },
  {
    title: '任务状态',
    dataIndex: 'taskStatus',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'beoName',
    label: '客户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const taskFormSchema: FormSchema[] = [
  {
    field: 'beoOrderId',
    label: 'beo订单',
    component: 'ApiSelect',
    componentProps: {
      api: getOrderList,
      labelField: 'orderName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'deptId',
    label: '执行部门',
    component: 'TreeSelect',
    componentProps: {
      replaceFields: {
        title: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'taskTime',
    label: '执行时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },

  {
    label: '执行内容',
    field: 'content',
    component: 'InputTextArea',
    required: true,
  },
];
