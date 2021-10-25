import { getFoodMenuList, getFoodsTypeList } from '/@/api/admin/banquet';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '菜单（品）名称',
    dataIndex: 'name',
    width: 200,
  },
  // {
  //   title: '单价',
  //   dataIndex: 'price',
  //   width: 50,
  // },
  {
    title: '总价',
    dataIndex: 'total',
    width: 50,
  },
  // {
  //   title: '数量',
  //   dataIndex: 'foodsNo',
  //   width: 180,
  // },
  {
    title: '菜单属于哪个菜品',
    dataIndex: 'parentId',
    ifShow: false,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '菜单（品）名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '菜单（品）名称',
    required: true,
    component: 'Input',
  },
  // {
  //   field: 'price',
  //   label: '单价',
  //   required: true,
  //   component: 'Input',
  // },
  {
    field: 'total',
    label: '总价',
    required: false,
    component: 'Input',
  },
  // {
  //   field: 'foodsNo',
  //   label: '数量',
  //   required: true,
  //   component: 'InputNumber',
  // },
  {
    field: 'isChild',
    label: '是否是菜品',
    required: false,
    component: 'Checkbox',
  },
  {
    label: '所属菜单',
    field: 'parentId',
    component: 'ApiSelect',
    componentProps: {
      api: getFoodMenuList,
      labelField: 'name',
      valueField: 'id',
    },
    required: ({ values }) => values.isChild,
    ifShow: ({ values }) => values.isChild,
  },
  {
    label: '菜品类型',
    field: 'type',
    component: 'ApiSelect',
    componentProps: {
      api: getFoodsTypeList,
      labelField: 'label',
      valueField: 'code',
    },
    required: ({ values }) => values.isChild,
    ifShow: ({ values }) => values.isChild,
  },
];
