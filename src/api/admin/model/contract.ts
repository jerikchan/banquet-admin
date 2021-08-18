import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
export type ContractParams = BasicPageParams & {
  id?: string;
  status?: string;
};

export interface ContractListItem {
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

export type ContractListGetResultModel = BasicFetchResult<ContractListItem>;
