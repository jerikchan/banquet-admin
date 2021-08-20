import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
export type OrderParams = BasicPageParams & {
  id?: string;
  status?: string;
};

export interface OrderListItem {
  id: string;
  orderName: string;
  orderCode: string;
  flowId: string;
  createUserId: string;
  createTime: string;
  modifyTime: string;
  status: string;
  agreementId: string;
  agreementCode: string;
  managerId: string;
  managerName: string;
  managerMobile: string;
  banquetTheme: string;
  salesManId: string;
  salesManName: string;
  salesManMobile: string;
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
  taskCode: string;
  content: string;
  deptId: string;
  deptName: number;
  taskTime: string;
  createTime: string;
  taskStatus: string;
}

/**
 * @description: Request list return value
 */

export type TaskListGetResultModel = BasicFetchResult<TaskListItem>;

export type OrderListGetResultModel = BasicFetchResult<OrderListItem>;
