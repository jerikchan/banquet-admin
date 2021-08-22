import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type ChannelParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type CustomerParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type CommentParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type MenuParams = {
  menuName?: string;
  status?: string;
};

export interface ChannelListItem {
  accountId: string;
  userName: string;
  email: string;
  nickName: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

export interface CustomerListItem {
  accountId: string;
  userName: string;
  email: string;
  nickName: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

export interface CommentListItem {
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

export interface UploadApiResult {
  message: string;
  code: number;
  url: string;
}

/**
 * @description: Request list return value
 */
export type ChannelListGetResultModel = BasicFetchResult<ChannelListItem>;

export type CustomerListGetResultModel = BasicFetchResult<CustomerListItem>;

export type CommentListGetResultModel = BasicFetchResult<CommentListItem>;

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;

export type UploadResultModel = BasicFetchResult<UploadApiResult>;
