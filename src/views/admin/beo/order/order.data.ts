// import { isAccountExist } from '/@/api/demo/system';
// import { getOrderTypeList } from '/@/api/admin/beo';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '订单编号',
    dataIndex: 'orderCode',
    width: 120,
  },
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
    width: 120,
  },
  {
    title: '宴会主题',
    dataIndex: 'banquetTheme',
    width: 120,
  },
  {
    title: '宴会时间',
    dataIndex: 'banquetTime',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'statusStr',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
];

export const foodsColumn: BasicColumn[] = [
  {
    title: '菜名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 120,
  },
  {
    title: '菜数量',
    dataIndex: 'foodsNo',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'agreementCode',
    label: '合同编号',
    component: 'Input',
    // componentProps: {
    //   // disabled: true,
    //   api: getContractList,
    //   labelField: 'agreementCode',
    //   valueField: 'id',
    // },
    colProps: { span: 8 },
  },
  {
    field: 'banquetTheme',
    label: '宴会主题',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const orderFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: '合同id',
    component: 'Input',
    componentProps: {
      // disabled: true,
      // api: getContractList,
      // labelField: 'agreementCode',
      // valueField: 'id',
    },
    required: false,
    show: false,
  },
  {
    field: 'agreementCode',
    label: '合同编号',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
  },
  {
    field: 'banquetTheme',
    label: '宴会主题',
    component: 'Input',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'salesManName',
    label: '销售名称',
    component: 'Input',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'salesMobile',
    label: '销售联系电话',
    component: 'Input',
    required: true,
  },
  {
    field: 'managerName',
    label: '管家名称',
    component: 'Input',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'managerMobile',
    label: '管家联系方式',
    component: 'Input',
    required: true,
    colProps: {
      offset: 2,
    },
  },
];

export const roomScheduleFormSchema: FormSchema[] = [
  {
    field: 'banquetTime',
    label: '时间',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
  },
  {
    field: 'roomName',
    label: '宴会厅',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'banquetType',
    label: '宴会类型',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'setUpType',
    label: '摆桌形式',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    field: 'deskCount',
    label: '桌数',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: false,
    },
  },
  {
    field: 'backupDesk',
    label: '备桌数',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: false,
    },
  },
];

export const beoTaskFormSchema: FormSchema[] = [
  {
    field: 'taskTime',
    label: '时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: false,
  },
  {
    field: 'content',
    label: '执行内容',
    component: 'InputTextArea',
    required: false,
    colProps: {
      offset: 2,
    },
  },
];
