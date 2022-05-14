import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description/index';
import { h } from 'vue';
import { Upload } from 'ant-design-vue';

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

export const flowSchema: DescItem[] = [
  {
    field: 'flowCode',
    label: '流程编号',
  },
  {
    field: 'flowName',
    label: '流程名称',
  },
  {
    field: 'flowTypeStr',
    label: '流程类型',
  },
  {
    field: 'promoterName',
    label: '发起人',
  },
  {
    field: 'customerName',
    label: '相关客户',
  },
];

export const customerInfoSchema: DescItem[] = [
  {
    field: 'customerName',
    label: '客户名称',
  },
  {
    field: 'customerSource',
    label: '获客渠道',
  },
  {
    field: 'customerMobile',
    label: '客户号码',
  },
  {
    field: 'salesManagerName',
    label: '销售经理姓名',
  },
  {
    field: 'createTime',
    label: '客户信息录入时间',
  },
  {
    field: 'purposeTime',
    label: '意向宴会时间',
  },
  {
    field: 'customerTypeStr',
    label: '客户类型',
  },
  {
    field: 'canBiao',
    label: '餐标',
  },
  {
    label: '流失去向',
    field: 'cancelDirection',
    show: (data) => data.flowType === '3',
  },
  {
    label: '流失原因',
    field: 'cancelReason',
    show: (data) => data.flowType === '3',
  },
  {
    label: '无效原因',
    field: 'invalidReason',
    show: (data) => data.flowType === '6',
  },
];

export const refundTimeTableSchema: BasicColumn[] = [
  {
    title: '名称',
    width: 100,
    dataIndex: 'realName',
  },
  {
    title: '所属部门',
    width: 100,
    dataIndex: 'deptName',
  },
  {
    title: '处理时间	',
    width: 100,
    dataIndex: 'modifyTime',
  },
  {
    title: '处理内容',
    width: 100,
    dataIndex: 'content',
  },
  {
    title: '处理状态',
    width: 200,
    dataIndex: 'statusStr',
  },
];

export const agreementInfoSchema: DescItem[] = [
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
    field: 'discountMoney',
    label: '优惠金额',
  },
  {
    field: 'extraPrice',
    label: '额外费用',
  },
  {
    field: 'frontMoney',
    label: '定金',
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

export const beoInfoSchema: DescItem[] = [
  {
    field: 'orderCode',
    label: 'beo单号',
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

export const beoTaskListSchema: BasicColumn[] = [
  {
    title: '部门名称',
    width: 180,
    dataIndex: 'deptName',
  },
  {
    title: '执行时间',
    width: 180,
    dataIndex: 'taskTime',
  },
  {
    title: '执行内容',
    width: 200,
    dataIndex: 'content',
  },
  {
    title: '任务状态',
    width: 100,
    dataIndex: 'taskStatusSr',
  },
  {
    title: '审核状态',
    width: 100,
    dataIndex: 'statusStr',
  },
];

export const returnCollectionFormSchema: DescItem[] = [
  {
    label: '回款单编号',
    field: 'code',
  },
  {
    label: '回款时间',
    field: 'returnTime',
  },
  {
    label: '回款金额',
    field: 'returnMoney',
  },
  {
    label: '回款人',
    field: 'returnMan',
  },
  {
    label: '备注',
    field: 'remark',
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

export const roomScheduleFormSchema: DescItem[] = [
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
    field: 'setUpType',
    label: '摆桌形式',
    render: (val) =>
      h(Upload, {
        listType: 'picture-card',
        showUploadList: { showPreviewIcon: true, showRemoveIcon: false },
        fileList: val,
      }),
  },
  {
    field: 'deskCount',
    label: '桌数',
  },
  {
    field: 'backupDesk',
    label: '备桌数',
  },
];

export const beoDetailsInfoSchema: DescItem[] = [
  // {
  //   label: '饮料酒水(Drink)',
  //   field: 'drinks',
  // },
  {
    label: '厨房/饮料酒水备注',
    field: 'drinks',
  },
  {
    label: '餐饮部备注',
    field: 'mealDepartment',
  },
  {
    label: '管家部备注',
    field: 'managerDepartment',
  },
  {
    label: '礼品礼服/灯控音控备注',
    field: 'lights',
  },
  {
    label: '企划部备注',
    field: 'planningRemark',
  },
  {
    label: '工程安保备注',
    field: 'projectSafety',
  },
  {
    label: '财务部备注',
    field: 'financeRemark',
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
