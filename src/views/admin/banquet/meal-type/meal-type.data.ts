import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '餐标类型名称',
    dataIndex: 'label',
    width: 200,
  },
  {
    title: '餐标类型值',
    dataIndex: 'code',
    width: 180,
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
    field: 'label',
    label: '餐标类型名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'label',
    label: '餐标类型名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'code',
    label: '餐标类型值',
    required: true,
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  // {
  //   label: ' ',
  //   field: 'menu',
  //   slot: 'menu',
  //   component: 'Input',
  // },
];
