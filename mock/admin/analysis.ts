import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess, resultError } from '../_util';

const channelList = () => {
  const list = [] as any;
  for (let index = 0; index < 5; index++) {
    list.push({
      name: `渠道${index}`,
      value: Math.ceil(Math.random() * 1000),
    });
  }
  return list;
};

const skipOrderList = () => {
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
      return resultSuccess(channelList);
    },
  },
  {
    url: '/basic-api/analysis/skipOrder',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess(skipOrderList);
    },
  },
] as MockMethod[];
