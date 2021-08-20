import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
export type AcceptParams = BasicPageParams & {
  id?: string;
  status?: string;
};

export interface AcceptListItem {
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

export type AcceptListGetResultModel = BasicFetchResult<AcceptListItem>;

export type TotalParams = BasicPageParams & {
  id?: string;
  status?: string;
};

export interface TotalListItem {
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

export type TotalListGetResultModel = BasicFetchResult<TotalListItem>;
