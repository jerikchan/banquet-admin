export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T extends any> {
  items: T[];
  total: number;
}

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
