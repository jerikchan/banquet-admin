import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
export type MessageParams = BasicPageParams & {
  id?: string;
  status?: string;
};

export interface MessageListItem {
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

export type MessageListGetResultModel = BasicFetchResult<MessageListItem>;
