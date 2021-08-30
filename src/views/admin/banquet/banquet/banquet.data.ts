// import { isAccountExist } from '/@/api/demo/system';
// import { getCommentTypeList } from '/@/api/admin/customer';
import { getRoomList, getScheduleTypeList } from '/@/api/admin/banquet';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '厅房名称',
    dataIndex: 'roomName',
    width: 120,
  },
  {
    title: '档期类型',
    dataIndex: 'scheduleTypeStr',
    width: 120,
  },
  {
    title: '档期具体时间',
    dataIndex: 'banquetTime',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '摆桌形式',
    dataIndex: 'setUpType',
    width: 180,
  },
  {
    title: '桌数',
    dataIndex: 'deskCount',
    width: 180,
  },
  {
    title: '备用桌数',
    dataIndex: 'backupDesk',
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
    field: 'roomId',
    label: '厅房',
    component: 'ApiSelect',
    componentProps: {
      api: getRoomList,
      labelField: 'roomName',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'scheduleType',
    label: '档期类型',
    component: 'ApiSelect',
    componentProps: {
      api: getScheduleTypeList,
      labelField: 'label',
      valueField: 'value',
    },
    required: true,
  },
  {
    field: 'banquetTime',
    label: '档期时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      format: 'YYYY-MM-DD HH:mm:ss',
    },
    required: true,
  },
  {
    field: 'setUpType',
    label: '摆桌形式',
    component: 'Input',
    required: true,
  },
  {
    field: 'deskCount',
    label: '桌数',
    component: 'Input',
    required: true,
  },
  {
    field: 'backupDesk',
    label: '备用桌数',
    component: 'Input',
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    required: true,
  },
];
