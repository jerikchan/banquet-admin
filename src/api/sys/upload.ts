import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { uploadUrl = '', devUrl } = useGlobSetting();

/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl,
      onUploadProgress,
    },
    params
  );
}

export function uploadPicApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void
) {
  return defHttp.uploadFile<UploadApiResult>(
    {
      url: `${devUrl}/file/fileUpload`,
      onUploadProgress,
    },
    params
  );
}

export async function uploadPicApiCustom(params?: any) {
  try {
    const ret = await defHttp.uploadFile<UploadApiResult>(
      {
        url: `${devUrl}/file/fileUploadCustom`,
        onUploadProgress: params.onProgress,
      },
      {
        file: params.file,
      }
    );
    if (ret.status === 200 && ret.data.code === 0) {
      params.onSuccess(ret.data.result, ret.request);
    } else {
      params.onError(null, ret.request);
    }
  } catch (err) {
    params.onError(err, null);
  }
}
