import { ManagerParams, ManagerListGetResultModel, UploadResultModel } from './model/manager';

import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { UploadFileParams } from '/#/axios';

const { devUrl } = useGlobSetting();

enum Api {
  GetFormList = '/form/findFormInfos',

  GetCustomerFollowFormDetail = '/form/findCustomerFollowFormDetail',

  GetSetMealContentFormDetail = '/form/findSetMealContentForm',

  GetSendPersonFormDetail = '/form/findSendPersonFormDetail',

  GetTryOnMakeUpFormDetail = '/form/findTryOnMakeUpFormDetail',

  GetSiYiChatFormDetail = '/form/findSiYiChatFormDetail',

  GetFamilyMeetingFormDetail = '/form/findFamilyMeetingFormDetail',

  GetAttentionCheckFormDetail = '/form/findAttentionCheckFormDetail',

  GetCustomerFollowFormWord = '/file/downloadCustomerFollowFormTemplate',

  UploadCustoemrFollowForm = '/word/followForm',

  UploadSetMealFormWord = '/word/importSetMealForm',

  UploadSendPersonForm = '/word/importSendPersonFormDetail',

  UploadTryOnMakeUpForm = '/word/importTryOnMakeUpForm',

  UploadSiYiChatForm = '/word/importSiYiChatForm',

  UploadFamilyMeetingForm = '/word/importFamilyMeetingForm',

  UploadAttentionCheckForm = '/word/importAttentionCheckForm',

  UpdateCustomerFollowForm = '/form/saveCustomerFollowForm',

  UpdateSetMealContentForm = '/form/saveSetMealContentForm',

  UpdateSendPersonForm = '/form/saveSendPersonForm',

  UpdateTryOnMakeUpForm = '/form/saveTryOnMakeUpForm',

  UpdateFamilyMeetingForm = '/form/saveFamilyMeetingForm',

  UpdateSiYiChatForm = '/form/saveSiYiChatForm',

  UpdateAttentCheckForm = '/form/saveAttentionCheckForm',
}

export const getFormList = (params?: ManagerParams) =>
  defHttp.get<ManagerListGetResultModel>({ url: Api.GetFormList, params }, { devUrl });

export const getCustomerFollowFormDetail = (params?: { id: string }) =>
  defHttp.get<ManagerListGetResultModel>(
    { url: Api.GetCustomerFollowFormDetail, params },
    { devUrl }
  );

export const getSetMealContentFormDetail = (params?: { id: string }) =>
  defHttp.get<ManagerListGetResultModel>(
    { url: Api.GetSetMealContentFormDetail, params },
    { devUrl }
  );

export const getSendPersonFormDetail = (params?: { id: string }) =>
  defHttp.get<ManagerListGetResultModel>({ url: Api.GetSendPersonFormDetail, params }, { devUrl });

export const getTryOnMakeUpFormDetail = (params?: { id: string }) =>
  defHttp.get<ManagerListGetResultModel>({ url: Api.GetTryOnMakeUpFormDetail, params }, { devUrl });

export const getSiYiChatFormDetail = (params?: { id: string }) =>
  defHttp.get<ManagerListGetResultModel>({ url: Api.GetSiYiChatFormDetail, params }, { devUrl });

export const getFamilyMeetingFormDetail = (params?: { id: string }) =>
  defHttp.get<ManagerListGetResultModel>(
    { url: Api.GetFamilyMeetingFormDetail, params },
    { devUrl }
  );

export const getAttentionCheckFormDetail = (params?: { id: string }) =>
  defHttp.get<ManagerListGetResultModel>(
    { url: Api.GetAttentionCheckFormDetail, params },
    { devUrl }
  );

export const getCustomerFollowFormWord = (params?: { agreementId: string }) =>
  defHttp.get<ManagerListGetResultModel>(
    { url: Api.GetCustomerFollowFormWord, params },
    { devUrl }
  );

export function uploadCustoemrFollowForm(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/word/followForm`,
      onUploadProgress,
    },
    params
  );
}

export function uploadSetmelFormWord(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/word/importSetMealForm`,
      onUploadProgress,
    },
    params
  );
}

export function uploadSendPersonForm(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/word/importSendPersonFormDetail`,
      onUploadProgress,
    },
    params
  );
}

export function uploadTryOnMakeUpForm(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/word/importTryOnMakeUpForm`,
      onUploadProgress,
    },
    params
  );
}

export function uploadSiYiChatForm(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/word/importSiYiChatForm`,
      onUploadProgress,
    },
    params
  );
}

export function uploadFamilyMeetingForm(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/word/importFamilyMeetingForm`,
      onUploadProgress,
    },
    params
  );
}

export function uploadAttentionCheckForm(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadResultModel>(
    {
      url: `${devUrl}/word/importAttentionCheckForm`,
      onUploadProgress,
    },
    params
  );
}

export const updateCustomerFollowForm = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>(
    { url: Api.UpdateCustomerFollowForm, params },
    { devUrl }
  );

export const updateSetMealContentForm = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>(
    { url: Api.UpdateSetMealContentForm, params },
    { devUrl }
  );

export const updateSendPersonForm = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.UpdateSendPersonForm, params }, { devUrl });

export const updateTryOnMakeUpForm = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.UpdateTryOnMakeUpForm, params }, { devUrl });

export const updateSiYiChatForm = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.UpdateSiYiChatForm, params }, { devUrl });

export const updateFamilyMeetingForm = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.UpdateFamilyMeetingForm, params }, { devUrl });

export const updateAttentCheckForm = (params?: {}) =>
  defHttp.post<ManagerListGetResultModel>({ url: Api.UpdateAttentCheckForm, params }, { devUrl });
