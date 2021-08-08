import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { buildUUID } from '/@/utils/uuid';

const { devUrl, apiUrl } = useGlobSetting();

enum Api {
  Login = '/login/loginAuth',
  Logout = '/login/logout',
  GetUserInfo = '/login/getUserInfo',
  GetPermCode = '/getPermCode',
  GetVerCode = '/login/getVerifiCode',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
      devUrl,
    }
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { devUrl });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout }, { devUrl });
}

export async function getVerCode() {
  const urlPrefix = devUrl ? devUrl : apiUrl;
  const key = buildUUID();
  return { code: `${urlPrefix}${Api.GetVerCode}?k=${key}`, key };
}
