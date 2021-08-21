import {
  AccountParams,
  DeptListItem,
  RoleParams,
  RolePageParams,
  MenuParams,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
  MenuListGetResultModel,
} from './model/system';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetAccountList = '/account/find',
  AddAccount = '/account/add',
  UpdateAccount = '/account/update',
  DeleteAccount = '/account/delete',

  DeptList = '/dept/get/tree',
  AddDept = '/dept/add',
  UpdateDept = '/dept/update',
  DeleteDept = '/dept/delete',
  GetDeptInfo = '/dept/findDeptInfo',

  RolePageList = '/role/findRoleInfos',
  AddRole = '/role/add',
  UpdateRole = '/role/update',
  DeleteRole = '/role/delete',
  GetRoleInfo = '/role/findRoleInfo',

  GetMenuList = '/system/getMenuList',
}

export const getAccountList = (params?: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.GetAccountList, params }, { devUrl });

export const addAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.AddAccount, params }, { devUrl });

export const updateAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.UpdateAccount, params }, { devUrl });

export const deleteAccount = (params?: { id: string }) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.DeleteAccount, params }, { devUrl });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params }, { devUrl });

export const addDept = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.AddDept, params }, { devUrl });

export const updateDept = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.UpdateDept, params }, { devUrl });

export const deleteDept = (params?: { id: string }) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.DeleteDept, params }, { devUrl });

export const getDeptInfo = (params?: { id: string }) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.GetDeptInfo, params }, { devUrl });

export const getRoleList = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params }, { devUrl });

export const addRole = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.AddRole, params }, { devUrl });

export const updateRole = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.UpdateRole, params }, { devUrl });

export const deleteRole = (params?: { id: string }) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.DeleteRole, params }, { devUrl });

export const getRoleInfo = (params?: { id: string }) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetRoleInfo, params }, { devUrl });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.GetMenuList, params });
