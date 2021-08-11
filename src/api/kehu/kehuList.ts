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
  DirectoryPageList = '/customer/findCustomer',
  GetAllDirectoryList = '/system/getAllDirectoryList',
  AddDirectory = '/customer/addCustomer',
  UpdateDirectory = '/customer/updateCustomer',
  DeleteDirectory = '/customer/deleteCustomer',
  MenuList = '/system/getMenuList',
  setDirectoryStatus = '/system/setRoleStatus',
}

export const getKehuListByPage = (params?: DirectoryPageParams) =>
  defHttp.get<DirectoryPageListGetResultModel>(
    {
      url: Api.DirectoryPageList,
      params: { ...params },
    },
    { devUrl }
  );

export const getAllKehuList = (params?: DirectoryParams) =>
  defHttp.get<DirectoryListGetResultModel>({
    url: Api.GetAllDirectoryList,
    params: { ...params },
  });

export const addKehu = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.AddDirectory,
      params: { ...params },
    },
    { devUrl }
  );

export const updateKehu = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.UpdateDirectory,
      params: { ...params },
    },
    { devUrl }
  );

export const deleteKehu = (params?: { dicId: string }) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.DeleteDirectory,
      params,
    },
    { devUrl }
  );

export const setKehuStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setDirectoryStatus, params: { id, status } });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });
