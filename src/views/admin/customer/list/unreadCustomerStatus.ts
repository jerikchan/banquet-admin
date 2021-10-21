import { getUnreadCustomerStatusNum } from '/@/api/admin/customer';
import { reactive } from 'vue';

let store: any;

export const unreadCustomerStatus = () => {
  store = store || reactive<any>({ total: 0 });
  const reload = async () => {
    // debugger;
    const obj = await getUnreadCustomerStatusNum();
    store.total = obj.num;
    // console.log('store: ' + store.total);
  };
  reload();
  return [store, { reload, getUnreadCustomerStatusNum }];
};
