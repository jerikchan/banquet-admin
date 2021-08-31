import {
  FlowParams,
  MenuParams,
  ReviewParams,
  FlowListGetResultModel,
  MenuListGetResultModel,
  ReviewListGetResultModel,
} from './model/approval';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetFlowList = '/flow/findFlowTemplates',
  GetFlowNodes = '/flow/findFlowTemplateNodes',
  AddFlow = '/flow/add',
  UpdateFlow = '/flow/updateTemplateNodes',
  DeleteFlow = '/flow/delete',
  GetFlowInfo = '/flow/findWorkFlowInfo',

  GetReviewList = '/flow/findFlowsWait',
  AddReview = '/flow/add',
  UpdateReview = '/flow/approval/commit',
  DeleteReview = '/flow/delete',

  GetWorkFlowFlowNodes = '/flow/findFlowNodes',

  GetFormList = '/flow/findFlows',

  GetMenuList = '/system/getMenuList',
}

export const getFlowList = (params: FlowParams) =>
  defHttp.get<FlowListGetResultModel>(
    {
      url: Api.GetFlowList,
      params,
    },
    { devUrl }
  );

export const getFlowNodes = (params: { templateId: string }) =>
  defHttp.get<FlowListGetResultModel>(
    {
      url: Api.GetFlowNodes,
      params,
    },
    { devUrl }
  );

export const addFlow = (params?: FlowParams) =>
  defHttp.post<FlowListGetResultModel>(
    {
      url: Api.AddFlow,
      params,
    },
    { devUrl }
  );

export const updateFlow = (params?: FlowParams) =>
  defHttp.post<FlowListGetResultModel>(
    {
      url: Api.UpdateFlow,
      params,
    },
    { devUrl }
  );

export const deleteFlow = (params?: { dicId: string }) =>
  defHttp.post<FlowListGetResultModel>(
    {
      url: Api.DeleteFlow,
      params,
    },
    { devUrl }
  );

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.GetMenuList, params });

export const getReviewList = (params: ReviewParams) =>
  defHttp.get<ReviewListGetResultModel>(
    {
      url: Api.GetReviewList,
      params,
    },
    { devUrl }
  );

export const addReview = (params?: ReviewParams) =>
  defHttp.post<ReviewListGetResultModel>(
    {
      url: Api.AddReview,
      params,
    },
    { devUrl }
  );

export const updateReview = (params?: ReviewParams) =>
  defHttp.post<ReviewListGetResultModel>(
    {
      url: Api.UpdateReview,
      params,
    },
    { devUrl }
  );

export const deleteReview = (params?: { dicId: string }) =>
  defHttp.post<ReviewListGetResultModel>(
    {
      url: Api.DeleteReview,
      params,
    },
    { devUrl }
  );

export const getFormList = (params: ReviewParams) =>
  defHttp.get<ReviewListGetResultModel>(
    {
      url: Api.GetFormList,
      params,
    },
    { devUrl }
  );

export const getFlowInfo = (params: {}) =>
  defHttp.get<ReviewListGetResultModel>(
    {
      url: Api.GetFlowInfo,
      params,
    },
    { devUrl }
  );

export const getWorkFlowFlowNodes = (params: {}) =>
  defHttp.get<ReviewListGetResultModel>(
    {
      url: Api.GetWorkFlowFlowNodes,
      params,
    },
    { devUrl }
  );
