import { getFoodsInfos } from '/@/api/admin/contract';
import { getHouseKeeperList } from '/@/api/admin/system';
import { getScheduleTypeList } from '/@/api/admin/banquet';
// import { getOrderTypeList } from '/@/api/admin/beo';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';
import { h } from 'vue';
import { Upload } from 'ant-design-vue';

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
    title: '当前管家',
    dataIndex: 'managerName',
    width: 120,
  },
  {
    title: '状态',
    dataIndex: 'statusStr',
    width: 120,
  },
  {
    title: '完成状态',
    dataIndex: 'beoStatusStr',
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
    required: false,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'salesManMobile',
    label: '销售联系电话',
    component: 'Input',
    required: false,
  },
  {
    field: 'managerName',
    label: '管家名称',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'managerMobile',
    label: '管家联系方式',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
  },
];

export const roomScheduleFormSchema: FormSchema[] = [
  {
    field: 'banquetTime',
    label: '宴会时间',
    component: 'DatePicker',
    componentProps: {
      disabled: false,
      showTime: true,
    },
    required: false,
  },
  {
    field: 'roomName',
    label: '宴会厅',
    component: 'Input',
    componentProps: {
      disabled: false,
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
      disabled: false,
    },
    colProps: {
      offset: 2,
    },
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
    required: false,
  },
  // {
  //   field: 'setUpType',
  //   label: '摆桌形式',
  //   component: 'Input',
  //   required: false,
  //   componentProps: {
  //     disabled: false,
  //   },
  // },
  {
    field: 'deskCount',
    label: '桌数',
    component: 'InputNumber',
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
    component: 'InputNumber',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: false,
    },
  },
  {
    field: 'setUpType',
    label: '摆桌形式',
    component: 'Input',
    slot: 'setUpType',
    itemProps: {
      autoLink: false,
    },
    required: false,
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

export const managerAllocationSchema: FormSchema[] = [
  {
    field: 'managerId',
    label: '选择管家',
    component: 'ApiSelect',
    componentProps: {
      api: getHouseKeeperList,
      labelField: 'realName',
      valueField: 'id',
    },
    required: true,
  },
  // {
  //   field: 'remark',
  //   label: '备注',
  //   component: 'InputTextArea',
  // },
];

export const drinkFormSchema: FormSchema[] = [
  {
    field: 'drinks',
    label: '备注',
    // label: '饮料酒水(Drink)',
    component: 'InputTextArea',
    colProps: {
      span: 20,
    },
  },
];

export const lightFormSchema: FormSchema[] = [
  {
    field: 'lights',
    label: '备注',
    component: 'InputTextArea',
    colProps: {
      span: 20,
    },
  },
];

export const mealDepartmentFormSchema: FormSchema[] = [
  {
    field: 'mealDepartment',
    label: '备注',
    component: 'InputTextArea',
    colProps: {
      span: 20,
    },
  },
];

export const managerDepartmentFormSchema: FormSchema[] = [
  {
    field: 'managerDepartment',
    label: '备注',
    component: 'InputTextArea',
    colProps: {
      span: 20,
    },
  },
];

export const projectSafetyFormSchema: FormSchema[] = [
  {
    field: 'projectSafety',
    label: '备注',
    component: 'InputTextArea',
    colProps: {
      span: 20,
    },
  },
];

export const financeRemarkFormSchema: FormSchema[] = [
  {
    field: 'financeRemark',
    label: '备注',
    component: 'InputTextArea',
    colProps: {
      span: 20,
    },
  },
];

export const searchFoodsFormSchema: FormSchema[] = [
  {
    field: 'foodsId',
    label: '菜单选择',
    component: 'ApiSelect',
    colProps: { span: 8 },
    componentProps: {
      api: getFoodsInfos,
      labelField: 'name',
      valueField: 'id',
    },
  },
];

export const beoFinanceFormSchema: FormSchema[] = [
  {
    label: '收款人',
    field: 'receivableMan',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '预计总收款',
    field: 'preTotal',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '实收款',
    field: 'realTotal',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '定金',
    field: 'frontMoney',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '中款',
    field: 'midMoney',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '尾款',
    field: 'finalMoney',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '婚庆价格',
    field: 'banquetMoney',
    component: 'Input',
    required: false,
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '餐费',
    field: 'mealMoney',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
  {
    label: '额外费用',
    field: 'extraMoney',
    component: 'Input',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: true,
    },
  },
];

// export const foodsFormSchema: FormSchema[] = [
//   // {
//   //   field: 'mealType',
//   //   label: '菜品类型',
//   //   component: 'Select',
//   //   componentProps: {
//   //     options: [
//   //       {
//   //         label: '选项1',
//   //         value: '1',
//   //         key: '1',
//   //       },
//   //       {
//   //         label: '选项2',
//   //         value: '2',
//   //         key: '2',
//   //       },
//   //     ],
//   //   },
//   //   required: false,
//   // },
//   // {
//   //   field: 'remark',
//   //   label: '备注',
//   //   component: 'InputTextArea',
//   // },
//   {
//     field: 'isStandard',
//     component: 'Switch',
//     label: '是否使用标准菜单',
//     colProps: {
//       span: 8,
//     },
//     labelWidth: 200,
//   },
//   {
//     field: 'foodsId',
//     component: 'Select',
//     label: '菜单选择',
//     dynamicDisabled: ({ values }) => {
//       return !values.isStandard;
//     },
//   },
// ];

export const beoBasicInfoSchema: DescItem[] = [
  {
    field: 'agreementCode',
    label: '合同编号',
  },
  {
    field: 'banquetTheme',
    label: '宴会主题',
  },
  {
    field: 'salesManName',
    label: '销售名称',
  },
  {
    field: 'salesManMobile',
    label: '销售号码',
  },
  {
    field: 'managerName',
    label: '管家名称',
  },
  {
    field: 'managerMobile',
    label: '管家号码',
  },
];

export const roomScheduleDetailSchema: DescItem[] = [
  {
    field: 'banquetTime',
    label: '时间',
  },
  {
    field: 'roomName',
    label: '宴会厅',
  },
  {
    field: 'banquetType',
    label: '宴会类型',
  },
  {
    field: 'scheduleTypeStr',
    label: '餐别',
  },
  {
    field: 'deskCount',
    label: '桌数',
  },
  {
    field: 'backupDesk',
    label: '备桌数',
  },
  {
    field: 'setUpType',
    label: '摆桌形式',
    render: (val) =>
      h(Upload, {
        listType: 'picture-card',
        showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
        fileList: val,
      }),
  },
];

export const foodsDetailColumn: BasicColumn[] = [
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

export const beoDetailsInfoSchema: DescItem[] = [
  {
    label: '饮料酒水(Drink)',
    field: 'drinks',
  },
  {
    label: '灯控音控备注(Audio Visual)',
    field: 'lights',
  },
  {
    label: '餐饮部备注(F&B)',
    field: 'mealDepartment',
  },
  {
    label: '管家部备注(HD)',
    field: 'managerDepartment',
  },
  {
    label: '工程安保部备注(ENG)',
    field: 'projectSafety',
  },
  {
    label: '财务部备注(A/C)',
    field: 'financeRemark',
  },
];

export const receivableInfoFormSchema: DescItem[] = [
  {
    label: '单据编号',
    field: 'code',
  },
  {
    label: '合同编号',
    field: 'agreementCode',
  },
  {
    label: '单据类型',
    field: 'dataType',
  },
  {
    label: '预计总款额',
    field: 'preTotal',
  },
  {
    label: '实收款',
    field: 'realTotal',
  },
  {
    label: '最终收款时间',
    field: 'lastTime',
  },
  {
    label: '定金',
    field: 'frontMoney',
  },
  {
    label: '中款',
    field: 'midMoney',
  },
  {
    label: '尾款',
    field: 'finalMoney',
  },
  {
    label: '婚礼价格',
    field: 'banquetMoney',
  },
  {
    label: '餐费',
    field: 'mealMoney',
  },
  {
    label: '额外费用',
    field: 'extraMoney',
  },
];

export const beoFinishFinanceFormSchema: FormSchema[] = [
  {
    label: '预计总收款',
    field: 'preTotal',
    component: 'InputNumber',
    required: false,
    componentProps: {
      disabled: false,
    },
  },
  {
    label: '实收款',
    field: 'realTotal',
    component: 'InputNumber',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: false,
    },
  },
  {
    label: '定金',
    field: 'frontMoney',
    component: 'InputNumber',
    required: false,
    componentProps: {
      disabled: false,
    },
    colProps: {
      offset: 2,
    },
  },
  {
    label: '中款',
    field: 'midMoney',
    component: 'InputNumber',
    required: false,
    componentProps: {
      disabled: false,
    },
  },
  {
    label: '尾款',
    field: 'finalMoney',
    component: 'InputNumber',
    required: false,
    colProps: {
      offset: 2,
    },
    componentProps: {
      disabled: false,
    },
  },
  {
    label: '婚庆价格',
    field: 'banquetMoney',
    component: 'InputNumber',
    required: false,
    componentProps: {
      disabled: false,
    },
    colProps: {
      offset: 2,
    },
  },
  {
    label: '餐费',
    field: 'mealMoney',
    component: 'InputNumber',
    required: false,
    componentProps: {
      disabled: false,
    },
  },
  {
    label: '额外费用',
    field: 'extraMoney',
    component: 'InputNumber',
    required: false,
    componentProps: {
      disabled: false,
    },
    colProps: {
      offset: 2,
    },
  },
];
