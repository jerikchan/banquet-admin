import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetChannelAnalysis = '/analysis/channel',
  GetSkipOrderAnalysis = '/analysis/skipOrder',
}

export const getChannelAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelAnalysis,
      params,
    }
    // { devUrl }
  );

export const getSkipOrderAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSkipOrderAnalysis,
      params,
    }
    // { devUrl }
  );
