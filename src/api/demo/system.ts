import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  AccountList = '/account/find',
  AddAccount = '/account/add',
  UpdateAccount = '/account/update',
  DeleteAccount = 'a/ccount/delete',
  IsAccountExist = '/system/accountExist',
  DeptList = '/dept/get/tree',
  AddDept = '/dept/add',
  UpdateDept = '/dept/update',
  DeleteDept = '/dept/delete',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  RolePageList = '/role/findRoleInfos',
  GetAllRoleList = '/system/getAllRoleList',
  AddRole = '/role/add',
  UpdateRole = '/role/update',
  DeleteRole = '/role/delete',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params }, { devUrl });

export const addAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.AddAccount, params }, { devUrl });

export const updateAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.UpdateAccount, params }, { devUrl });

export const deleteAccount = (params?: { AccountId: string }) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.DeleteAccount, params }, { devUrl });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params }, { devUrl });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params }, { devUrl });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });

export const addDept = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.AddDept, params }, { devUrl });

export const updateDept = (params?: DeptListItem) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.UpdateDept, params }, { devUrl });

export const deleteDept = (params?: { deptId: string }) =>
  defHttp.post<DeptListGetResultModel>({ url: Api.DeleteDept, params }, { devUrl });

export const addRole = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.AddRole, params }, { devUrl });

export const updateRole = (params?: RoleParams) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.UpdateRole, params }, { devUrl });

export const deleteRole = (params?: { roleId: string }) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.DeleteRole, params }, { devUrl });
