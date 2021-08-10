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
  DirectoryPageList = '/dic/findDic',
  GetAllDirectoryList = '/system/getAllDirectoryList',
  AddDirectory = '/dic/add',
  UpdateDirectory = '/dic/update',
  DeleteDirectory = '/dic/delete',
  MenuList = '/system/getMenuList',
  setDirectoryStatus = '/system/setRoleStatus',
}

export const getYanhuiListByPage = (params?: DirectoryPageParams) =>
  defHttp.get<DirectoryPageListGetResultModel>(
    {
      url: Api.DirectoryPageList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002', isChild: '0' },
    },
    { devUrl }
  );

export const getAllYanhuiList = (params?: DirectoryParams) =>
  defHttp.get<DirectoryListGetResultModel>({
    url: Api.GetAllDirectoryList,
    params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002', isChild: '0' },
  });

export const addYanhui = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.AddDirectory,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002', isChild: '0' },
    },
    { devUrl }
  );

export const updateYanhui = (params?: DirectoryParams) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.UpdateDirectory,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002', isChild: '0' },
    },
    { devUrl }
  );

export const deleteYanhui = (params?: { roleId: string }) =>
  defHttp.post<DirectoryListGetResultModel>(
    {
      url: Api.DeleteDirectory,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002', isChild: '0' },
    },
    { devUrl }
  );

export const setYanhuiStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setDirectoryStatus, params: { id, status } });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });
