import { getBacklogNum } from '/@/api/admin/analysis';
import { getBacklogDoneList } from '/@/api/admin/system';
import { reactive } from 'vue';
// import { useUserStore } from '/@/store/modules/user';

let store: any;

export const useBacklogDoneCard = () => {
  store = store || reactive<any>({ total: 0 });
  // const userStore = useUserStore();
  // const userinfo = userStore.getUserInfo;
  // console.log(userinfo);
  // console.log(useUserStore());

  const reload = async () => {
    // Object.assign(store.list, await getBacklogs());
    // const obj = await getBacklogNum();
    // store.total = obj.num;
    // console.log(store.total);
  };
  reload();
  return [store, { reload, getBacklogDoneList, getBacklogNum }];
};
