import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type ManagerParams = {
  deptName?: string;
  status?: string;
};

export interface ManagerListItem {
  id: string;
  remark: string;
  managerName: string;
}

export type AccountParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export interface UploadApiResult {
  message: string;
  code: number;
  url: string;
}

export type ManagerListGetResultModel = BasicFetchResult<ManagerListItem>;

export type UploadResultModel = BasicFetchResult<UploadApiResult>;
