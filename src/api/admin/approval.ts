import {
  FlowParams,
  MenuParams,
  FlowListGetResultModel,
  MenuListGetResultModel,
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
