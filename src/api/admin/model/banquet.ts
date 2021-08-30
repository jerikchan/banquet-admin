import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type BanquetTypeParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type RoomTypeParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type RoomParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type BanquetParams = BasicPageParams & {
  userName?: string;
  nickName?: string;
};

export type MenuParams = {
  menuName?: string;
  status?: string;
};

export interface BanquetTypeListItem {
  accountId: string;
  userName: string;
  email: string;
  nickName: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

export interface RoomTypeListItem {
  accountId: string;
  userName: string;
  email: string;
  nickName: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
  value: string;
}

/**
 * 厅房
 */
export interface RoomListItem {
  id: string;
  roomName: string;
  banquetType: string;
  roomType: string;
  createTime: string;
  remark: string;
}

/**
 * 厅房档期
 */
export interface BanquetListItem {
  id: string;
  roomId: string;
  agreementId: string;
  scheduleType: string;
  banquetTime: string;
  createTime: string;
  setUpType: string;
  desckCount: number;
  backupDesk: number;
}

export interface MenuListItem {
  id: string;
  orderNo: string;
  createTime: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

/**
 * @description: Request list return value
 */
export type BanquetTypeListGetResultModel = BasicFetchResult<BanquetTypeListItem>;

export type RoomTypeListGetResultModel = BasicFetchResult<RoomTypeListItem>;

export type RoomListGetResultModel = BasicFetchResult<RoomListItem>;

export type BanquetListGetResultModel = BasicFetchResult<BanquetListItem>;

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;
