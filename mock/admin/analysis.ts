import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';

const channelData = () => {
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

const skipOrderData = () => {
  const list = [] as any;
  for (let index = 0; index < 5; index++) {
    list.push({
      salesName: `销售${index}`,
      customerNum: Math.ceil(Math.random() * 1000),
    });
  }
  const data = { list, max: 1000, splitNumber: 4 };
  return data;
};

export default [
  {
    url: '/basic-api/analysis/channel',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(channelData);
    },
  },
  {
    url: '/basic-api/analysis/skipOrder',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/goWhere',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/banquetTypeDeal',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(channelData);
    },
  },
  {
    url: '/basic-api/analysis/banquetTypeBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/tableNumberDeal',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/tableMoneyDeal',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/roomBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/foodBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/banquetTypeNumBook',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/dealMoney',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/dealDiscount',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/dealDiscountPercent',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(channelData);
    },
  },
  {
    url: '/basic-api/analysis/dealPercent',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
  {
    url: '/basic-api/analysis/invite',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderData);
    },
  },
] as MockMethod[];
