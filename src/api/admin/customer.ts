import {
  ChannelParams,
  MenuParams,
  CustomerParams,
  ChannelListGetResultModel,
  MenuListGetResultModel,
  CustomerListGetResultModel,
} from './model/customer';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetChannelList = '/dic/findDic',
  AddChannel = '/dic/add',
  UpdateChannel = '/dic/update',
  DeleteChannel = '/dic/delete',

  GetCustomerList = '/customer/findCustomer',
  AddCustomer = '/customer/addCustomer',
  UpdateCustomer = '/customer/updateCustomer',
  DeleteCustomer = '/customer/deleteCustomer',

  GetMenuList = '/system/getMenuList',
}

export const getChannelList = (params: ChannelParams) =>
  defHttp.get<ChannelListGetResultModel>(
    {
      url: Api.GetChannelList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const addChannel = (params?: ChannelParams) =>
  defHttp.post<ChannelListGetResultModel>(
    {
      url: Api.AddChannel,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const updateChannel = (params?: ChannelParams) =>
  defHttp.post<ChannelListGetResultModel>(
    {
      url: Api.UpdateChannel,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const deleteChannel = (params?: { dicId: string }) =>
  defHttp.post<ChannelListGetResultModel>(
    {
      url: Api.DeleteChannel,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.GetMenuList, params });

export const getCustomerTypeList = () =>
  new Promise((resolve) => {
    resolve([
      { label: '待审核', id: '0' },
      { label: '线索', id: '1' },
      { label: '意向', id: '2' },
      { label: '流失', id: '3' },
      { label: '成交', id: '5' },
    ]);
  });

export const getCustomerList = (params?: CustomerParams) =>
  defHttp.get<CustomerListGetResultModel>({ url: Api.GetCustomerList, params }, { devUrl });

export const addCustomer = (params?: CustomerParams) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.AddCustomer, params }, { devUrl });

export const updateCustomer = (params?: CustomerParams) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.UpdateCustomer, params }, { devUrl });

export const deleteCustomer = (params?: { accountId: string }) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.DeleteCustomer, params }, { devUrl });
