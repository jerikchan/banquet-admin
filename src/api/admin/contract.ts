import { ContractParams, ContractListGetResultModel } from './model/notification';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetContractist = '/agreement/find',
  UpdateContract = '/agreement/update',
  DeleteContract = '/agreement/delete',
}

export const getContractList = (params?: ContractParams) =>
  defHttp.get<ContractListGetResultModel>({ url: Api.GetContractist, params }, { devUrl });

// export const addContract = (params?: ContractParams) =>
//   defHttp.post<ContractListGetResultModel>({ url: Api.AddContract, params }, { devUrl });

export const updateContract = (params?: ContractParams) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.UpdateContract, params }, { devUrl });

export const deleteContract = (params?: { id: string }) =>
  defHttp.post<ContractListGetResultModel>({ url: Api.DeleteContract, params }, { devUrl });
