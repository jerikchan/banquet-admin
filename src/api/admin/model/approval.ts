import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type FlowParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type MenuParams = {
  menuName?: string;
  status?: string;
};

export interface FlowListItem {
  accountId: string;
  userName: string;
  email: string;
  nickName: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

export interface MenuListItem {
  id: string;
  orderNo: string;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

/**
 * @description: Request list return value
 */
export type FlowListGetResultModel = BasicFetchResult<FlowListItem>;

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;
