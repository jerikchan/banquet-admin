import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetChannelAnalysis = '/analysis/channel',
  // 2022-05，根据月份选择统计相应的客户来源数据
  GetChannelAnalysisByMonthSelected = '/analysis/channelByMonthSelected',
  GetChannelCompareAnalysis = '/analysis/barDataset',

  // 2022-05,根据月份统计滑单数量
  GetSkipOrderAnalysisBySelectedMonth = '/analysis/skipOrderBySelectedMonth',
  GetSkipOrderAnalysis = '/analysis/skipOrder',
  GetGrowListAnalysis = '/analysis/growList',
  GetSalesRankList = '/analysis/findSalesMonthRankList',

  GetGoWhereAnalysis = '/analysis/goWhere',
  // 2022-05，根据月份统计滑单去向
  GetGoWhereAnalysisBySelectedMonth = '/analysis/goWhereBySelectedMonth',

  GetBanquetTypeDealAnalysis = '/analysis/banquetTypeDeal',
  // 2022-05，根据月份统计各宴会类型金额占比
  GetBanquetTypeDealAnalysisBySelectedMonth = '/analysis/banquetTypeDealBySelectedMonth',

  GetBanquetTypeBookAnalysis = '/analysis/banquetTypeBook',
  // 2022-05
  GetBanquetTypeBookAnalysisBySelectedMonth = '/analysis/banquetTypeBookBySelectedMonth',

  GetCompleteTableAnalysis = '/analysis/completeTable',
  // 2022-05，根据月份选择统计已完成桌单
  GetCompleteTableAnalysisBySelectedMonth = '/analysis/completeTableBySelectedMonth',

  GetTableNumberDealAnalysis = '/analysis/tableNumberDeal',
  // 2022-05
  GetTableNumberDealAnalysisBySelectedMonth = '/analysis/tableNumberDealBySelectedMonth',
  GetTableMoneyDealAnalysis = '/analysis/tableMoneyDeal',
  // 2022-05
  GetTableMoneyDealAnalysisBySelectedMonth = '/analysis/tableMoneyDealBySelectedMonth',

  GetRoomBookAnalysis = '/analysis/roomBook',
  // 2022-05
  GetRoomBookAnalysisBySelectedMonth = '/analysis/roomBookBySelectedMonth',
  GetFoodBookAnalysis = '/analysis/foodBook',
  // 2022-05
  GetFoodBookAnalysisBySelectedMonth = '/analysis/foodBookBySelectedMonth',

  GetBanquetTypeNumBookAnalysis = '/analysis/banquetTypeNumBook',
  // 2022-05
  GetBanquetTypeNumBookAnalysisBySelectedMonth = '/analysis/banquetTypeNumBookBySelectedMonth',
  GetDealMoneyAnalysis = '/analysis/dealMoney',
  // 2022-05
  GetDealMoneyAnalysisMonth = '/analysis/dealMoney/month',

  GetDealDiscountAnalysis = '/analysis/dealDiscount',
  // 2022-05
  GetDealDiscountAnalysisMonth = '/analysis/dealDiscount/month',
  GetDealDiscountPercentAnalysis = '/analysis/dealDiscountPercent',
  // 2022-05
  GetDealDiscountPercentAnalysisMonth = '/analysis/dealDiscountPercent/month',

  GetDealPercentAnalysis = '/analysis/dealPercent',
  // 2022-05
  GetDealPercentAnalysisMonth = '/analysis/dealPercent/month',
  GetInviteAnalysis = '/analysis/invite',
  // 2022-05
  GetInviteAnalysisMonth = '/analysis/invite/month',

  GetPrefCard = '/analysis/prefCard',

  UpdateTotal = '/target/addOrUpdate',

  GetDealCountYearAnalysis = '/analysis/dealCountYear',
  GetSkipOrderYearAnalysis = '/analysis/skipOrderYear',
  GetNewCustomerYearAnalysis = '/analysis/newCustomerYear',
  GetChannelYearAnalysis = '/analysis/channelYear',
  GetDealYearAnalysis = '/analysis/dealYear',
  GetInviteYearAnalysis = '/analysis/inviteYear',

  GetBacklogNum = '/backlog/findBacklogNum',
  GetSingleSalesSignMoney = '/analysis/singleSignMoney',
}

export const getChannelAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelAnalysis,
      params,
    },
    { devUrl }
  );

export const getChannelAnalysisByMonthSelected = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelAnalysisByMonthSelected,
      params,
    },
    { devUrl }
  );

export const getSingleSalesSignMoney = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSingleSalesSignMoney,
      params,
    },
    { devUrl }
  );

export const getPrefCard = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetPrefCard,
      params,
    },
    { devUrl }
  );

export const getBacklogNum = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBacklogNum,
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
    },
    { devUrl }
  );

export const getSkipOrderAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSkipOrderAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getGoWhereAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetGoWhereAnalysis,
      params,
    },
    { devUrl }
  );

export const getGoWhereAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetGoWhereAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeDealAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeDealAnalysis,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeDealAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeDealAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeBookAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeBookAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getTableNumberDealAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetTableNumberDealAnalysis,
      params,
    },
    { devUrl }
  );

export const getTableNumberDealAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetTableNumberDealAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getTableMoneyDealAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetTableMoneyDealAnalysis,
      params,
    },
    { devUrl }
  );

export const getTableMoneyDealAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetTableMoneyDealAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getRoomBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetRoomBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getRoomBookAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetRoomBookAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getFoodBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetFoodBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getFoodBookAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetFoodBookAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeNumBookAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeNumBookAnalysis,
      params,
    },
    { devUrl }
  );

export const getBanquetTypeNumBookAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetBanquetTypeNumBookAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const getDealMoneyAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealMoneyAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealMoneyAnalysisMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealMoneyAnalysisMonth,
      params,
    },
    { devUrl }
  );

export const getDealDiscountAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealDiscountAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealDiscountAnalysisMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealDiscountAnalysisMonth,
      params,
    },
    { devUrl }
  );

export const getDealDiscountPercentAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealDiscountPercentAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealDiscountPercentAnalysisMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealDiscountPercentAnalysisMonth,
      params,
    },
    { devUrl }
  );

export const getDealPercentAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealPercentAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealPercentAnalysisMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealPercentAnalysisMonth,
      params,
    },
    { devUrl }
  );

export const getInviteAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetInviteAnalysis,
      params,
    },
    { devUrl }
  );

export const getInviteAnalysisMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetInviteAnalysisMonth,
      params,
    },
    { devUrl }
  );

export const getChannelCompareAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelCompareAnalysis,
      params,
    }
    // { devUrl }
  );

export const getCompleteTableAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetCompleteTableAnalysis,
      params,
    },
    { devUrl }
  );

export const getCompleteTableAnalysisBySelectedMonth = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetCompleteTableAnalysisBySelectedMonth,
      params,
    },
    { devUrl }
  );

export const updateTotal = (params?: any) =>
  defHttp.post(
    {
      url: Api.UpdateTotal,
      params,
    },
    { devUrl }
  );

export const getDealCountYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealCountYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getSkipOrderYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetSkipOrderYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getNewCustomerYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetNewCustomerYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getChannelYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetChannelYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getDealYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetDealYearAnalysis,
      params,
    },
    { devUrl }
  );

export const getInviteYearAnalysis = (params?: any) =>
  defHttp.get(
    {
      url: Api.GetInviteYearAnalysis,
      params,
    },
    { devUrl }
  );
