// import { isAccountExist } from '/@/api/demo/system';
// import { getCommentTypeList } from '/@/api/admin/customer';
import { getRoomTypeList } from '/@/api/admin/banquet';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '厅房名称',
    dataIndex: 'roomName',
    width: 120,
  },
  {
    title: '厅房类型',
    dataIndex: 'roomType',
    width: 120,
  },
  {
    title: '宴会类型',
    dataIndex: 'banquetType',
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
    field: 'roomName',
    label: '厅房名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const roomFormSchema: FormSchema[] = [
  {
    field: 'roomName',
    label: '厅房名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'roomType',
    label: '厅房类型',
    component: 'ApiSelect',
    componentProps: {
      api: getRoomTypeList,
      labelField: 'label',
      valueField: 'id',
    },
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    required: true,
  },
];
