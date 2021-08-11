import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type DirectoryParams = {
  roleName?: string;
  status?: string;
};

export type DirectoryPageParams = BasicPageParams & DirectoryParams;

export interface DirectoryListItem {
  id: string;
  roleName: string;
  roleValue: string;
  status: number;
  orderNo: string;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type DirectoryPageListGetResultModel = BasicFetchResult<DirectoryListItem>;

export type DirectoryListGetResultModel = DirectoryListItem[];

export type MenuParams = {
  menuName?: string;
  status?: string;
};

export interface MenuListItem {
  id: string;
  orderNo: string;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;
