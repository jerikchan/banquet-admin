import { ContractParams, ContractListGetResultModel } from './model/contract';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetContractist = '/agreement/find',
  AddContract = '/agreement/add',
  UpdateContract = '/agreement/update',
  DeleteContract = '/agreement/delete',
  CancelContract = '/agreement/cancelAgreement',

  GetMealTypetist = '/dic/getMealTypeList',
  GetFoodList = '/foods/findFoods',

  GetAgreementInfo = '/agreement/findAgreementInfo',
  GetScheduleByAgreementId = '/banquet/findRoomScheduleByAgreementId',

  GetFoodsInfos = '/foods/findFoods',

  AllocationManager = '/agreement/allocationManagers',

  CancelAllocationManager = '/agreement/cancelManagers',

  ReloadAgreementSales = '/agreement/reloadAgreementSales',

  GetFoodsChooseInfos = '/foods/findFoodsChoose',

  AddPurposeAgreement = '/agreement/purpose/add',
  UpdatePurposeAgreement = '/agreement/purpose/update',
  GetPurposeAgreementList = '/agreement/purpose/list',
  GetPurposeDetail = '/agreement/purpose/detail',

  ToFormal = '/agreement/purpose/to/formal',

  CancelPurpose = '/agreement/purpose/cancel',
}

export const getContractList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetContractist, params }, { devUrl });

export const getPurposeAgreementList = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetPurposeAgreementList, params }, { devUrl });

export const getAgreementInfo = (params?: {}) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetAgreementInfo, params }, { devUrl });

export const getPurposeDetail = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetPurposeDetail, params }, { devUrl });

export const getFoodsInfos = (params?: {}) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetFoodsInfos, params }, { devUrl });

export const getFoodsChooseInfos = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetFoodsChooseInfos, params }, { devUrl });

export const getScheduleByAgreementId = (params?: {}) =>
  defHttp.get<ContractListGetResultModel>(
    { url: Api.GetScheduleByAgreementId, params },
    { devUrl }
  );

export const addContract = (params?: ContractParams) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.AddContract, params }, { devUrl });

export const addPurposeAgreement = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddPurposeAgreement, params }, { devUrl });

export const toFormal = (params?: {}) =>
  defHttp.post<{}>({ url: Api.ToFormal, params }, { devUrl });

export const cancelPurpose = (params?: {}) =>
  defHttp.post<{}>({ url: Api.CancelPurpose, params }, { devUrl });

export const reloadAgreementSales = (params?: {}) =>
  defHttp.post<{}>({ url: Api.ReloadAgreementSales, params }, { devUrl });

export const updateContract = (params?: ContractParams) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.UpdateContract, params }, { devUrl });

export const updatePurposeAgreement = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdatePurposeAgreement, params }, { devUrl });

export const deleteContract = (params?: { id: string }) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.DeleteContract, params }, { devUrl });

export const cancelContract = (params?: { id: string }) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.CancelContract, params }, { devUrl });

export const getMealTypeList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetMealTypetist, params }, { devUrl });

export const getFoodList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetFoodList, params }, { devUrl });

export const allocationManager = (params?: any) =>
  defHttp.post<{}>({ url: Api.AllocationManager, params }, { devUrl });

export const cancelAllocationManager = (params?: any) =>
  defHttp.post<{}>({ url: Api.CancelAllocationManager, params }, { devUrl });
