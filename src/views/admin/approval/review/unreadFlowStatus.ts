import { getUnreadFlowNum } from '/@/api/admin/approval';
import { reactive } from 'vue';

let store: any;

export const unreadFlowStatus = () => {
  store = store || reactive<any>({ total: 0 });
  const reload = async () => {
    const obj = await getUnreadFlowNum();
    store.total = obj.num;
    // Object.assign(storeFlow, obj);
    console.log('flowStore: ' + store.total);
  };
  reload();

  async function returnNum() {
    const obj = await getUnreadFlowNum();
    store.total = obj.num;
  }

  return [store, { reload, getUnreadFlowNum, returnNum }];
};
