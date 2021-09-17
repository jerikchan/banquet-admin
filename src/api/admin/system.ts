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
} from './model/system';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { RoleEnum, RoleNameEnum } from '/@/enums/roleEnum';
// import { async } from 'rxjs';

const { devUrl } = useGlobSetting();

enum Api {
  GetAccountList = '/account/find',
  AddAccount = '/account/add',
  UpdateAccount = '/account/update',
  DeleteAccount = '/account/delete',
  FindUserInfo = '/account/findUserInfo',
  UpdatePassword = '/account/updatePwd',

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

  GetSalesList = '/account/findSales',
  GetHouseKeeperList = '/account/findHouseKeeper',
  GetLatestTrendsInfo = '/latest/findLatest',
  GetBacklogs = '/backlog/findBackLogsNative',

  AddAuth = '/auth/add',

  UpdateBackLogStatus = '/backlog/updateStatus',
  ChangeBacklogStatus = '/backlog/changeStatus',

  GetSubmitReportInfos = '/report/findSubmitReportInfos',
}

export const getAccountList = (params?: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.GetAccountList, params }, { devUrl });

export const getSubmitReportInfos = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetSubmitReportInfos, params }, { devUrl });

export const findUserInfo = (params?: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.FindUserInfo, params }, { devUrl });

export const updatePassword = (params: { oldPwd: string; newPwd: string }) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.UpdatePassword, params }, { devUrl });

export const addAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.AddAccount, params }, { devUrl });

export const updateAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.UpdateAccount, params }, { devUrl });

export const updateBackLogStatus = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateBackLogStatus, params }, { devUrl });

export const changeBacklogStatus = (params?: {}) =>
  defHttp.post<{}>({ url: Api.ChangeBacklogStatus, params }, { devUrl });

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

export const getAuthList = () =>
  Promise.resolve(
    Object.keys(RoleEnum).map((key) => ({
      title: `${RoleNameEnum[key]}权限`,
      key: RoleEnum[key],
    }))
  );

export const addAuth = (params?: { name: string; value: string }) =>
  defHttp.post<RoleListGetResultModel>({ url: Api.AddAuth, params }, { devUrl });

// if (typeof window !== 'undefined') {
//   (async () => {
//     await addAuth({ name: RoleNameEnum.ANALYST, value: RoleEnum.ANALYST });
//     debugger;
//   })();
// }

export const getSalesList = (params?: MenuParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.GetSalesList, params }, { devUrl });

export const getHouseKeeperList = (params?: {}) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.GetHouseKeeperList, params }, { devUrl });

export const getLatestTrendsInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetLatestTrendsInfo, params }, { devUrl });

export const getBacklogs = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetBacklogs, params }, { devUrl });
