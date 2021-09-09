import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { getFoodList } from '/@/api/admin/contract';
import { getBanquetTypeList, getRoomList, getScheduleTypeList } from '/@/api/admin/banquet';
// import { uploadPicApi } from '/@/api/sys/upload';
import { DescItem } from '/@/components/Description/index';
import { h } from 'vue';
import { Upload } from 'ant-design-vue';
import { getSalesList, getHouseKeeperList } from '/@/api/admin/system';

export const columns: BasicColumn[] = [
  {
    title: '合同编号',
    dataIndex: 'agreementCode',
    width: 180,
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    width: 180,
  },
  {
    title: '宴会厅房',
    dataIndex: 'banquetRoomName',
    width: 180,
  },
  {
    title: '当前管家',
    dataIndex: 'managerName',
    width: 120,
  },
  {
    title: '餐别',
    dataIndex: 'scheduleTypeStr',
    width: 180,
  },
  {
    title: '宴会时间',
    dataIndex: 'banquetTime',
    width: 180,
  },
  // {
  //   title: '菜单菜品',
  //   dataIndex: 'foodStr',
  //   width: 180,
  // },
  {
    title: '保底桌数',
    dataIndex: 'floorsDeskCount',
    width: 90,
  },
  {
    title: '单桌价格',
    dataIndex: 'singlePrice',
    width: 90,
  },
  {
    title: '额外价格',
    dataIndex: 'extraPrice',
    width: 90,
  },
  {
    title: '备用桌数',
    dataIndex: 'backupDesk',
    width: 90,
  },
  {
    title: '定金',
    dataIndex: 'frontMoney',
    width: 90,
  },
  {
    title: '状态',
    dataIndex: 'statusStr',
    width: 140,
  },
  {
    title: '完成状态',
    dataIndex: 'finishStatusStr',
    width: 140,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'agreementCode',
    label: '合同编号',
    component: 'Input',
    colProps: { span: 6 },
  },
  {
    field: 'roomName',
    label: '厅房',
    component: 'ApiSelect',
    componentProps: {
      api: getRoomList,
      labelField: 'roomName',
      valueField: 'roomName',
    },
    colProps: { span: 4 },
    required: false,
  },
  {
    field: 'salesId',
    label: '销售',
    component: 'ApiSelect',
    componentProps: {
      api: getSalesList,
      labelField: 'realName',
      valueField: 'id',
    },
    colProps: { span: 4 },
    required: false,
  },
];

export const contractFormSchema: FormSchema[] = [
  {
    field: 'customerId',
    label: '客户id',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: true,
    ifShow: false,
  },
  {
    field: 'customerName',
    label: '客户名',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
  },
  {
    field: 'customerMobile',
    label: '联系电话',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    required: false,
  },
  {
    field: 'agreementCode',
    label: '合同编号',
    component: 'Input',
    required: true,
  },
  // {
  //   field: 'mobile',
  //   label: '电话',
  //   component: 'Input',
  // },
  {
    field: 'banquetTime',
    label: '宴会日期',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
    },
    required: true,
  },
  {
    field: 'scheduleType',
    label: '餐别',
    component: 'ApiSelect',
    componentProps: {
      api: getScheduleTypeList,
      labelField: 'label',
      valueField: 'value',
    },
    required: true,
  },
  {
    field: 'banquetType',
    label: '宴会类型',
    component: 'ApiSelect',
    componentProps: {
      api: getBanquetTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: true,
  },
  {
    field: 'banquetRoomId',
    label: '宴会厅房',
    component: 'ApiSelect',
    componentProps: {
      api: getRoomList,
      labelField: 'roomName',
      valueField: 'id',
    },
    required: true,
  },
  // {
  //   label: '餐别',
  //   field: 'scheduleType',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     api: getMealTypeList,
  //     labelField: 'label',
  //     valueField: 'id',
  //   },
  //   required: false,
  // },
  // {
  //   label: '菜单菜品',
  //   field: 'food',
  //   component: 'ApiTreeSelect',
  //   componentProps: {
  //     api: getFoodList,
  //     replaceFields: {
  //       title: 'name',
  //       value: 'id',
  //     },
  //   },
  //   required: true,
  // },
  {
    field: 'floorsDeskCount',
    label: '保底桌数',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'singlePrice',
    label: '单桌价格',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'banquetPrice',
    label: '婚庆价格',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'extraPrice',
    label: '格外费用',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'beforeDiscountTotal',
    label: '优惠前总价',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'afterDiscountTotal',
    label: '优惠后总价',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'backupDesk',
    label: '备用桌数',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'frontMoney',
    label: '定金',
    component: 'InputNumber',
    required: true,
  },
  // {
  //   field: 'status',
  //   label: '合同状态',
  //   component: 'Select',
  //   componentProps: {
  //     disabled: true,
  //     options: [
  //       {
  //         label: '未审核',
  //         value: '0',
  //       },
  //       {
  //         label: '审核中',
  //         value: '1',
  //       },
  //       {
  //         label: '审核不通过',
  //         value: '3',
  //       },
  //       {
  //         label: ' 审核通过',
  //         value: '5',
  //       },
  //     ],
  //   },
  // },
  // {
  //   field: 'file',
  //   label: '合同照片',
  //   component: 'Upload',
  //   componentProps: {
  //     api: uploadPicApi,
  //     accept: ['png', 'jpg', 'jpeg'],
  //   },
  //   required: true,
  // },
  {
    field: 'file',
    label: '合同照片',
    component: 'Input',
    slot: 'file',
    itemProps: {
      autoLink: false,
    },
    required: true,
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
  },
];

export const agreemetnDetailSchema: DescItem[] = [
  {
    field: 'agreementCode',
    label: '合同编号',
  },
  {
    field: 'customerName',
    label: '客户姓名',
  },
  {
    field: 'salesManName',
    label: '销售名称',
  },
  {
    field: 'banquetRoomName',
    label: '厅房名称',
  },
  {
    field: 'banquetTime',
    label: '宴会时间',
  },
  {
    field: 'banquetType',
    label: '宴会类型',
  },
  {
    field: 'singlePrice',
    label: '单桌价格',
  },
  {
    field: 'banquetPrice',
    label: '婚庆价格',
  },
  {
    field: 'beforeDiscountTotal',
    label: '优惠前总价',
  },
  {
    field: 'afterDiscountTotal',
    label: '优惠后总价',
  },
  {
    field: 'floorsDeskCount',
    label: '保底桌数',
  },
  {
    field: 'backupDesk',
    label: '备用桌数',
  },
  {
    field: 'file',
    label: '合同照片',
    render: (val) =>
      h(Upload, {
        listType: 'picture-card',
        showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
        fileList: val,
      }),
  },
  {
    field: 'remark',
    label: '备注',
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
