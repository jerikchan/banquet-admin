import { getUnreadFlowNum } from '/@/api/admin/approval';
import { reactive } from 'vue';

let storeFlow: any;

export const unreadFlowStatus = () => {
  storeFlow = storeFlow || reactive<any>({ total: 0 });
  const reload = async () => {
    const obj = await getUnreadFlowNum();
    storeFlow.total = obj.num;
    // Object.assign(storeFlow, obj);
    console.log('flowStore: ' + storeFlow.total);
  };
  reload();
  return [storeFlow, { reload, getUnreadFlowNum }];
};
