import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '审批流程名称',
    dataIndex: 'flowName',
    width: 200,
  },
  {
    title: '审批流程值',
    dataIndex: 'flowType',
    width: 180,
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'flowName',
    label: '审批流程名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'flowName',
    label: '审批流程名称',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'flowType',
    label: '审批流程值',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '',
    field: 'nodes',
    slot: 'nodes',
    component: 'Input',
  },
  {
    label: ' ',
    field: 'add',
    slot: 'add',
    component: 'Input',
  },
];
