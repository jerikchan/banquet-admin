import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetChannelAnalysis = '/analysis/channel',
  GetSkipOrderAnalysis = '/analysis/skipOrder',
  GetGrowListAnalysis = '/analysis/growList',
  GetSalesRankList = '/analysis/findSalesMonthRankList',
}

export const getChannelAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelAnalysis,
      params,
    },
    { devUrl }
  );

export const getGrowListAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetGrowListAnalysis,
      params,
    },
    { devUrl }
  );

export const getSalesRankList = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSalesRankList,
      params,
    },
    { devUrl }
  );

export const getSkipOrderAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSkipOrderAnalysis,
      params,
    }
    // { devUrl }
  );
