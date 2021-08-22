import {
  OrderParams,
  OrderListGetResultModel,
  TaskParams,
  TaskListGetResultModel,
} from './model/beo';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetOrderist = '/beo/findBeoOrder',
  AddOrder = '/beo/addBeoOrder',
  UpdateOrder = '/beo/updateBeoOrder',
  DeleteOrder = '/beo/deleteBeoOrder',
  GetOrder = '/beo/findBeoOrderInfo',

  GetTaskist = '/beo/findBeoTask',
  AddTask = '/beo/addBeoTask',
  UpdateTask = '/beo/updateBeoTask',
  DeleteTask = '/beo/deleteBeoTask',
}

export const getOrder = (params?: OrderParams) =>
  defHttp.get<OrderListGetResultModel>({ url: Api.GetOrder, params }, { devUrl });

export const getOrderList = (params?: OrderParams) =>
  defHttp.get<OrderListGetResultModel>({ url: Api.GetOrderist, params }, { devUrl });

export const addOrder = (params?: OrderParams) =>
  defHttp.post<OrderListGetResultModel>({ url: Api.AddOrder, params }, { devUrl });

export const updateOrder = (params?: OrderParams) =>
  defHttp.post<OrderListGetResultModel>({ url: Api.UpdateOrder, params }, { devUrl });

export const deleteOrder = (params?: { id: string }) =>
  defHttp.post<OrderListGetResultModel>({ url: Api.DeleteOrder, params }, { devUrl });

export const getTaskList = (params?: TaskParams) =>
  defHttp.get<TaskListGetResultModel>({ url: Api.GetTaskist, params }, { devUrl });

export const addTask = (params?: TaskParams) =>
  defHttp.post<TaskListGetResultModel>({ url: Api.AddTask, params }, { devUrl });

export const updateTask = (params?: TaskParams) =>
  defHttp.post<TaskListGetResultModel>({ url: Api.UpdateTask, params }, { devUrl });

export const deleteTask = (params?: { id: string }) =>
  defHttp.post<TaskListGetResultModel>({ url: Api.DeleteTask, params }, { devUrl });
