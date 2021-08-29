import { ManagerListGetResultModel } from './model/performance';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetPersonalPerformance = '/performance/findPrivate',
  GetPerformances = '/performance/findPerformance',
  AddPerformance = 'performance/add',
  UpdatePerformance = '/performance/update',
  DeletePerformance = '/performance/delete',
}

export const getPersonalPerformance = (params?: {}) =>
  defHttp.get<ManagerListGetResultModel>({ url: Api.GetPersonalPerformance, params }, { devUrl });

export const getPerformances = (params?: {}) =>
  defHttp.get<ManagerListGetResultModel>({ url: Api.GetPerformances, params }, { devUrl });

// export const addMessage = (params?: MessageParams) =>
//   defHttp.post<MessageListGetResultModel>({ url: Api.AddMessage, params }, { devUrl });

export const addPerformance = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.AddPerformance, params }, { devUrl });

export const updatePerformance = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.UpdatePerformance, params }, { devUrl });

export const deletePerformance = (params?: { id: string }) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.DeletePerformance, params }, { devUrl });
