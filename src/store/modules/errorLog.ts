import type { ErrorLogInfo } from '/#/store';

import { defineStore } from 'pinia';
import { store } from '/@/store';

import { formatToDateTime } from '/@/utils/dateUtil';
import projectSetting from '/@/settings/projectSetting';

import { ErrorTypeEnum } from '/@/enums/exceptionEnum';
import { logError, getLogErrorList } from '/@/api/sys/error';

export interface ErrorLogState {
  errorLogInfoList: Nullable<ErrorLogInfo[]>;
  errorLogListCount: number;
  remoteErrorLogInfoList: Nullable<ErrorLogInfo[]>;
}

export const useErrorLogStore = defineStore({
  id: 'app-error-log',
  state: (): ErrorLogState => ({
    errorLogInfoList: null,
    errorLogListCount: 0,
    remoteErrorLogInfoList: null,
  }),
  getters: {
    getErrorLogInfoList(): ErrorLogInfo[] {
      return [...(this.errorLogInfoList || []), ...(this.remoteErrorLogInfoList || [])];
    },
    getErrorLogListCount(): number {
      return this.errorLogListCount;
    },
  },
  actions: {
    async getLogErrorList() {
      try {
        if (!this.remoteErrorLogInfoList) {
          const data = await getLogErrorList();
          const list = data.list.map((v) => JSON.parse(v));
          this.remoteErrorLogInfoList = list;
        }
      } catch {}
    },
    addErrorLogInfo(info: ErrorLogInfo) {
      const item = {
        ...info,
        time: formatToDateTime(new Date()),
      };
      this.errorLogInfoList = [item, ...(this.errorLogInfoList || [])];
      this.errorLogListCount += 1;

      // 发送到服务端
      try {
        logError({ json: JSON.stringify(item) });
      } catch {}
    },

    setErrorLogListCount(count: number): void {
      this.errorLogListCount = count;
    },

    /**
     * Triggered after ajax request error
     * @param error
     * @returns
     */
    addAjaxErrorInfo(error) {
      const { useErrorHandle } = projectSetting;
      if (!useErrorHandle) {
        return;
      }
      const errInfo: Partial<ErrorLogInfo> = {
        message: error.message,
        type: ErrorTypeEnum.AJAX,
      };
      if (error.response) {
        const {
          config: { url = '', data: params = '', method = 'get', headers = {} } = {},
          data = {},
        } = error.response;
        errInfo.url = url;
        errInfo.name = 'Ajax Error!';
        errInfo.file = '-';
        errInfo.stack = JSON.stringify(data);
        errInfo.detail = JSON.stringify({ params, method, headers });
      }
      this.addErrorLogInfo(errInfo as ErrorLogInfo);
    },
  },
});

// Need to be used outside the setup
export function useErrorLogStoreWithOut() {
  return useErrorLogStore(store);
}
