import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  LogError = '/error/logError ',
  GetLogErrorList = '/error/getLogErrorList',
}

export function logError(params: any, requestOptions: any) {
  return defHttp.post<any>(
    {
      url: Api.LogError,
      params,
    },
    {
      devUrl,
      ...requestOptions,
    }
  );
}

export function getLogErrorList() {
  return defHttp.get<any>({ url: Api.GetLogErrorList }, { devUrl });
}
