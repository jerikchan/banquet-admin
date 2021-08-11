import {
  DirectoryParams,
  DirectoryPageParams,
  DirectoryPageListGetResultModel,
  DirectoryListGetResultModel,
  MenuParams,
  MenuListGetResultModel,
} from './model/directoryModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  DirectoryPageList = '/flow/findFlows',
  GetAllDirectoryList = '/system/getAllDirectoryList',
  AddDirectory = '/flow//add',
  UpdateDirectory = '/flow/update',
  DeleteDirectory = '/flow/delete',
  MenuList = '/system/getMenuList',
  setDirectoryStatus = '/system/setRoleStatus',
}

export const getFlowListByPage = (params?: DirectoryPageParams) =>
  defHttp.get<DirectoryPageListGetResultModel>(
    {
      url: Api.DirectoryPageList,
      params: { ...params },
    },
    { devUrl }
  );

export const getAllFlowList = (params?: DirectoryParams) =>
  defHttp.get<DirectoryListGetResultModel>({
    url: Api.GetAllDirectoryList,
    params: { ...params },
  });

export const addFlow = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.AddDirectory,
      params: { ...params },
    },
    { devUrl }
  );

export const updateFlow = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.UpdateDirectory,
      params: { ...params },
    },
    { devUrl }
  );

export const deleteFlow = (params?: { dicId: string }) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.DeleteDirectory,
      params,
    },
    { devUrl }
  );

export const setFlowStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setDirectoryStatus, params: { id, status } });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });
