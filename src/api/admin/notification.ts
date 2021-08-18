import { MessageParams, MessageListGetResultModel } from './model/notification';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetMessageList = '/notification/find',
  UpdateMessage = '/notification/update',
  DeleteMessage = '/notification/delete',
}

export const getMessageList = (params?: MessageParams) =>
  defHttp.get<MessageListGetResultModel>({ url: Api.GetMessageList, params }, { devUrl });

// export const addMessage = (params?: MessageParams) =>
//   defHttp.post<MessageListGetResultModel>({ url: Api.AddMessage, params }, { devUrl });

export const updateMessage = (params?: MessageParams) =>
  defHttp.post<MessageListGetResultModel>({ url: Api.UpdateMessage, params }, { devUrl });

export const deleteMessage = (params?: { id: string }) =>
  defHttp.post<MessageListGetResultModel>({ url: Api.DeleteMessage, params }, { devUrl });
