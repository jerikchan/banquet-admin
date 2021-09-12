import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const pieData = () => {
  const list = [] as any;
  for (let index = 0; index < 5; index++) {
    list.push({
      name: `渠道${index}`,
      value: Math.ceil(Math.random() * 1000),
    });
  }
  const data = { list };
  return data;
};

const barData = () => {
  const list = [] as any;
  for (let index = 0; index < 5; index++) {
    list.push({
      salesName: `销售${index}`,
      customerNum: Math.ceil(Math.random() * 1000),
    });
  }
  const data = { list, max: 1200, splitNumber: 6 };
  return data;
};

const barDataForType = () => {
  const list = [] as any;
  for (let index = 0; index < 5; index++) {
    list.push({
      salesName: `渠道${index}`,
      customerNum: Math.ceil(Math.random() * 1000),
    });
  }
  const data = { list, max: 1200, splitNumber: 6 };
  return data;
};

const barDatasetData = () => {
  const dataset = {
    dimensions: ['month', '上月', '本月'],
    source: [
      { month: '大众', 上月: 43.3, 本月: 85.8 },
      { month: '美团', 上月: 83.1, 本月: 73.4 },
      { month: '渠道C', 上月: 86.4, 本月: 65.2 },
      { month: '渠道D', 上月: 72.4, 本月: 53.9 },
      { month: '渠道12', 上月: 86.4, 本月: 65.2 },
      { month: '渠道D333', 上月: 72.4, 本月: 53.9 },
    ],
  };
  const legend = {
    data: ['上月', '本月'],
  };
  const data = { dataset, legend };
  return data;
};

const barStackData = () => {
  const legend = {
    data: ['婚宴A', '婚宴B', '婚宴C', '婚宴D', '婚宴E'],
  };
  const series = [
    {
      name: '婚宴A',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: '婚宴B',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '婚宴C',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '婚宴D',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [150, 212, 201, 154, 190, 330, 410],
    },
    {
      name: '婚宴E',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320],
    },
  ];
  const xAxisData = ['销售A', '销售b', '销售c', '销售d', '销售E', '销售F', '销售G'];
  const data = { series, legend, xAxisData };
  return data;
};

export default [
  {
    url: '/basic-api/analysis/completeTable',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/barDataset',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barDatasetData);
    },
  },
  {
    url: '/basic-api/analysis/channel',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(pieData);
    },
  },
  {
    url: '/basic-api/analysis/skipOrder',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/goWhere',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/banquetTypeDeal',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(pieData);
    },
  },
  {
    url: '/basic-api/analysis/banquetTypeBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barStackData);
    },
  },
  {
    url: '/basic-api/analysis/tableNumberDeal',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/tableMoneyDeal',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/roomBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/foodBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/banquetTypeNumBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barDataForType);
    },
  },
  {
    url: '/basic-api/analysis/dealMoney',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/dealDiscount',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/dealDiscountPercent',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(pieData);
    },
  },
  {
    url: '/basic-api/analysis/dealPercent',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
  {
    url: '/basic-api/analysis/invite',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(barData);
    },
  },
] as MockMethod[];
