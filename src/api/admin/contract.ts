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
}

export const getContractList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetContractist, params }, { devUrl });

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
