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
  DirectoryPageList = '/notification/find',
  GetAllDirectoryList = '/system/getAllDirectoryList',
  AddDirectory = '/notification//add',
  UpdateDirectory = '/notification/update',
  DeleteDirectory = '/notification/delete',
  MenuList = '/system/getMenuList',
  setDirectoryStatus = '/system/setRoleStatus',
}

export const getNotificationListByPage = (params?: DirectoryPageParams) =>
  defHttp.get<DirectoryPageListGetResultModel>(
    {
      url: Api.DirectoryPageList,
      params: { ...params },
    },
    { devUrl }
  );

export const getAllNotificationList = (params?: DirectoryParams) =>
  defHttp.get<DirectoryListGetResultModel>({
    url: Api.GetAllDirectoryList,
    params: { ...params },
  });

export const addNotification = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.AddDirectory,
      params: { ...params },
    },
    { devUrl }
  );

export const updateNotification = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.UpdateDirectory,
      params: { ...params },
    },
    { devUrl }
  );

export const deleteNotification = (params?: { dicId: string }) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.DeleteDirectory,
      params,
    },
    { devUrl }
  );

export const setNotificationStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setDirectoryStatus, params: { id, status } });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });
