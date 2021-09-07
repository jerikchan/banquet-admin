import { ContractParams, ContractListGetResultModel } from './model/contract';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetContractist = '/agreement/find',
  AddContract = '/agreement/add',
  UpdateContract = '/agreement/update',
  DeleteContract = '/agreement/delete',

  GetMealTypetist = '/dic/getMealTypeList',
  GetFoodList = '/foods/findFoods',

  GetAgreementInfo = '/agreement/findAgreementInfo',
  GetScheduleByAgreementId = '/banquet/findRoomScheduleByAgreementId',

  GetFoodsInfos = '/foods/findFoods',

  AllocationManager = '/agreement/allocationManagers',

  CancelAllocationManager = '/agreement/cancelManagers',
}

export const getContractList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetContractist, params }, { devUrl });

export const getAgreementInfo = (params?: {}) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetAgreementInfo, params }, { devUrl });

export const getFoodsInfos = (params?: {}) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetFoodsInfos, params }, { devUrl });

export const getScheduleByAgreementId = (params?: {}) =>
  defHttp.get<ContractListGetResultModel>(
    { url: Api.GetScheduleByAgreementId, params },
    { devUrl }
  );

export const addContract = (params?: ContractParams) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.AddContract, params }, { devUrl });

export const updateContract = (params?: ContractParams) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.UpdateContract, params }, { devUrl });

export const deleteContract = (params?: { id: string }) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.DeleteContract, params }, { devUrl });

export const getMealTypeList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetMealTypetist, params }, { devUrl });

export const getFoodList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetFoodList, params }, { devUrl });

export const allocationManager = (params?: any) =>
  defHttp.post<{}>({ url: Api.AllocationManager, params }, { devUrl });

export const cancelAllocationManager = (params?: any) =>
  defHttp.post<{}>({ url: Api.CancelAllocationManager, params }, { devUrl });
