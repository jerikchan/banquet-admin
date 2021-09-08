import { BasicColumn } from '/@/components/Table';

export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
  totalTitle: string;
  unit: string;
}

export const perfCard: GrowCardItem = {
  title: '当前已完成营业额',
  icon: 'sales-perf|svg',
  value: 4000,
  total: 120000,
  color: 'purple',
  action: '月',
  totalTitle: '目标营业额',
  unit: '元',
};

export const growCardList: GrowCardItem[] = [
  {
    title: '今日新增客户',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '日',
    totalTitle: '总客户',
    unit: '个',
  },
  {
    title: '今日成交数',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '日',
    totalTitle: '总成交数',
    unit: '单',
  },
  {
    title: '今日成交额',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: '日',
    totalTitle: '总成交额',
    unit: '元',
  },
  {
    title: '昨日滑单客户',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'red',
    action: '日',
    totalTitle: '总单客户',
    unit: '个',
  },
];

export const salesColumns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '签单额',
    dataIndex: 'signMoney',
    width: 150,
  },
  {
    title: '签单数量',
    dataIndex: 'num',
    width: 150,
  },
];
