import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
export type OrderParams = BasicPageParams & {
  id?: string;
  status?: string;
};

export interface OrderListItem {
  id: string;
  userName: string;
  email: string;
  nickName: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

/**
 * @description: Request list return value
 */

export type OrderListGetResultModel = BasicFetchResult<OrderListItem>;

export type TaskParams = BasicPageParams & {
  id?: string;
  status?: string;
};

export interface TaskListItem {
  id: string;
  userName: string;
  email: string;
  nickName: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

/**
 * @description: Request list return value
 */

export type TaskListGetResultModel = BasicFetchResult<TaskListItem>;
