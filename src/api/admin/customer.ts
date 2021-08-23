import {
  ChannelParams,
  MenuParams,
  CustomerParams,
  CommentParams,
  ChannelListGetResultModel,
  MenuListGetResultModel,
  CustomerListGetResultModel,
  CommentListGetResultModel,
  UploadResultModel,
} from './model/customer';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { UploadFileParams } from '/#/axios';

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
  UpdateCustomerType = '/customer/updateType',
  AllocationSales = '/customer/allocationSales',

  GetCommentList = '/chat/findChatRecord',
  AddComment = '/chat/add',
  // UpdateComment = '/dic/update',
  DeleteComment = '/chat/delete',

  GetMenuList = '/system/getMenuList',

  UploadCustomer = '/excel/importCustomerInfos',
  GetCumstomerInfo = '/customer/findCustomerInfo',
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

export const deleteChannel = (params?: { id: string }) =>
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

export const getAddCustomerTypeList = () =>
  new Promise((resolve) => {
    resolve([
      { label: '线索', id: '1' },
      { label: '意向', id: '2' },
    ]);
  });

export const getCustomerList = (params?: CustomerParams) =>
  defHttp.get<CustomerListGetResultModel>({ url: Api.GetCustomerList, params }, { devUrl });

export const addCustomer = (params?: CustomerParams) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.AddCustomer, params }, { devUrl });

export const updateCustomer = (params?: CustomerParams) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.UpdateCustomer, params }, { devUrl });

export const deleteCustomer = (params?: { id: string }) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.DeleteCustomer, params }, { devUrl });

export const updateCustomerType = (params?: any) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.UpdateCustomerType, params }, { devUrl });

export const allocationSales = (params?: any) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.AllocationSales, params }, { devUrl });

export const getCommentList = (params?: CommentParams) =>
  defHttp.get<CommentListGetResultModel>({ url: Api.GetCommentList, params }, { devUrl });

export const addComment = (params?: CommentParams) =>
  defHttp.post<CommentListGetResultModel>({ url: Api.AddComment, params }, { devUrl });

// export const updateComment = (params?: CommentParams) =>
//   defHttp.post<CommentListGetResultModel>({ url: Api.UpdateComment, params }, { devUrl });

export const deleteComment = (params?: { id: string }) =>
  defHttp.post<CommentListGetResultModel>({ url: Api.DeleteComment, params }, { devUrl });

export function uploadCustomer(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/excel/importCustomerInfos`,
      onUploadProgress,
    },
    params
  );
}
