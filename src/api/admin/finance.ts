import {
  TotalParams,
  TotalListGetResultModel,
  AcceptParams,
  AcceptListGetResultModel,
} from './model/finance';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetTotalist = '/finance/findReceivableInfo',
  AddTotal = '/finance/addReceivableInfo',
  UpdateTotal = '/finance/updateReceivableInfo',
  DeleteTotal = '/finance/deleteReceivableInfo',

  GetAcceptist = '/finance/findReturnCollectionInfo',
  AddAccept = '/finance/addReturnCollectionInfo',
  UpdateAccept = '/finance/updateReturnCollectionInfo',
  DeleteAccept = '/finance/deleteCollectionInfo',
}

export const getTotalList = (params?: TotalParams) =>
  defHttp.get<TotalListGetResultModel>({ url: Api.GetTotalist, params }, { devUrl });

export const addTotal = (params?: TotalParams) =>
  defHttp.post<TotalListGetResultModel>({ url: Api.AddTotal, params }, { devUrl });

export const updateTotal = (params?: TotalParams) =>
  defHttp.post<TotalListGetResultModel>({ url: Api.UpdateTotal, params }, { devUrl });

export const deleteTotal = (params?: { id: string }) =>
  defHttp.post<TotalListGetResultModel>({ url: Api.DeleteTotal, params }, { devUrl });

export const getAcceptList = (params?: AcceptParams) =>
  defHttp.get<AcceptListGetResultModel>({ url: Api.GetAcceptist, params }, { devUrl });

export const addAccept = (params?: AcceptParams) =>
  defHttp.post<AcceptListGetResultModel>({ url: Api.AddAccept, params }, { devUrl });

export const updateAccept = (params?: AcceptParams) =>
  defHttp.post<AcceptListGetResultModel>({ url: Api.UpdateAccept, params }, { devUrl });

export const deleteAccept = (params?: { id: string }) =>
  defHttp.post<AcceptListGetResultModel>({ url: Api.DeleteAccept, params }, { devUrl });
