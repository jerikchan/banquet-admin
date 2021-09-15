import { getBacklogNum } from '/@/api/admin/analysis';
import { getBacklogs } from '/@/api/admin/system';
import { reactive } from 'vue';

let store: any;

export const useBacklogCard = () => {
  store = store || reactive<any>({ total: 0 });
  const reload = async () => {
    // Object.assign(store.list, await getBacklogs());
    debugger;
    const obj = await getBacklogNum();
    store.total = obj.num;
    console.log(store.total);
  };
  reload();
  return [store, { reload, getBacklogs, getBacklogNum }];
};
