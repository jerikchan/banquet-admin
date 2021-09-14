import {
  ChannelParams,
  MenuParams,
  CustomerParams,
  CommentParams,
  CommentTypeParams,
  ChannelListGetResultModel,
  MenuListGetResultModel,
  CustomerListGetResultModel,
  CommentListGetResultModel,
  CommentTypeListGetResultModel,
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
  GetCustomer = '/customer/findCustomerInfo',
  AddCustomer = '/customer/addCustomer',
  UpdateCustomer = '/customer/updateCustomer',
  DeleteCustomer = '/customer/deleteCustomer',
  UpdateCustomerType = '/customer/updateType',
  AllocationSales = '/customer/allocationSales',
  UnallocationSales = '/customer/cancelSales',
  GetCustomerTypeList = '/dic/getCustomerTypeList',

  GetCommentList = '/chat/findChatRecord',
  AddComment = '/chat/add',
  UpdateComment = '/chat/update',
  DeleteComment = '/chat/delete',

  GetCommentTypeList = '/dic/findDic',
  AddCommentType = '/dic/add',
  UpdateCommentType = '/dic/update',
  DeleteCommentType = '/dic/delete',

  GetMenuList = '/system/getMenuList',

  UploadCustomer = '/excel/importCustomerInfos',
  GetCumstomerInfo = '/customer/findCustomerInfo',

  GetDicList = '/dic/findDic',
  DeleteDicInfo = '/dic/delete',
  AddDicInfo = '/dic/add',
  UpdateDicInfo = '/dic/update',

  GetCommentListNew = '/chat/findChatRecordNew',

  GetChatRecordInfo = '/chat/findChatRecordInfo',
}

export const getChannelList = (params: ChannelParams) =>
  defHttp.get<ChannelListGetResultModel>(
    {
      url: Api.GetChannelList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const getCancelDirectionList = (params: {}) =>
  defHttp.get<{}>(
    {
      url: Api.GetDicList,
      params: { ...params, identifyCode: 'cancel_direction' },
    },
    { devUrl }
  );

export const getCancelResonList = (params: {}) =>
  defHttp.get<{}>(
    {
      url: Api.GetDicList,
      params: { ...params, identifyCode: 'cancel_reason' },
    },
    { devUrl }
  );

export const deleteDicInfo = (params?: {}) =>
  defHttp.post<{}>(
    {
      url: Api.AddChannel,
      params: { ...params },
    },
    { devUrl }
  );

export const updateDicInfo = (params?: {}) =>
  defHttp.post<{}>(
    {
      url: Api.UpdateDicInfo,
      params: { ...params },
    },
    { devUrl }
  );

export const addDicInfo = (params?: {}) =>
  defHttp.post<{}>(
    {
      url: Api.AddDicInfo,
      params: { ...params },
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

export const getChatRecordInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetChatRecordInfo, params }, { devUrl });

export const getCustomerTypeList = (params?: CustomerParams) =>
  defHttp.get<CustomerListGetResultModel>({ url: Api.GetCustomerTypeList, params }, { devUrl });
// new Promise((resolve) => {
//   resolve([
//     { label: '待审核', id: '0' },
//     { label: '线索', id: '1' },
//     { label: '意向', id: '2' },
//     { label: '流失', id: '3' },
//     { label: '成交', id: '5' },
//   ]);
// });

export const getCustomerList = (params?: CustomerParams) =>
  defHttp.get<CustomerListGetResultModel>({ url: Api.GetCustomerList, params }, { devUrl });

export const getCommentListNew = (params?: CustomerParams) =>
  defHttp.get<CustomerListGetResultModel>({ url: Api.GetCommentListNew, params }, { devUrl });

export const getCustomer = (params?: { id: string }) =>
  defHttp.get<CustomerListGetResultModel>({ url: Api.GetCustomer, params }, { devUrl });

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

export const unallocationSales = (params?: any) =>
  defHttp.post<CustomerListGetResultModel>({ url: Api.UnallocationSales, params }, { devUrl });

export const getCommentList = (params?: CommentParams) =>
  defHttp.get<CommentListGetResultModel>({ url: Api.GetCommentList, params }, { devUrl });

export const addComment = (params?: CommentParams) =>
  defHttp.post<CommentListGetResultModel>({ url: Api.AddComment, params }, { devUrl });

export const updateComment = (params?: CommentParams) =>
  defHttp.post<CommentListGetResultModel>({ url: Api.UpdateComment, params }, { devUrl });

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

export const getCommentTypeList = (params: CommentTypeParams) =>
  defHttp.get<CommentTypeListGetResultModel>(
    {
      url: Api.GetCommentTypeList,
      params: { ...params, parentId: '402881847b6b50cb017b6b55c5670003' },
    },
    { devUrl }
  );

export const addCommentType = (params?: CommentTypeParams) =>
  defHttp.post<CommentTypeListGetResultModel>(
    {
      url: Api.AddCommentType,
      params: { ...params, parentId: '402881847b6b50cb017b6b55c5670003' },
    },
    { devUrl }
  );

export const updateCommentType = (params?: CommentTypeParams) =>
  defHttp.post<CommentTypeListGetResultModel>(
    {
      url: Api.UpdateCommentType,
      params: { ...params, parentId: '402881847b6b50cb017b6b55c5670003' },
    },
    { devUrl }
  );

export const deleteCommentType = (params?: { id: string }) =>
  defHttp.post<CommentTypeListGetResultModel>(
    {
      url: Api.DeleteCommentType,
      params: { ...params, parentId: '402881847b6b50cb017b6b55c5670003' },
    },
    { devUrl }
  );
