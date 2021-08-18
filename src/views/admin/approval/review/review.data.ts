import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '发起人',
    dataIndex: 'promoterName',
    width: 200,
  },
  {
    title: '流程名',
    dataIndex: 'flowName',
    width: 200,
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
    field: 'promoterName',
    label: '发起人名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'agree',
    label: '是否同意',
    required: true,
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: '同意',
          value: true,
        },
        {
          label: '驳回',
          value: false,
        },
      ],
    },
  },
  {
    label: '节点备注',
    field: 'nodeRemark',
    component: 'InputTextArea',
  },
  // {
  //   label: ' ',
  //   field: 'menu',
  //   slot: 'menu',
  //   component: 'Input',
  // },
];
