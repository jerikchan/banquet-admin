import {
  BanquetTypeParams,
  RoomTypeParams,
  MenuParams,
  BanquetTypeListGetResultModel,
  RoomTypeListGetResultModel,
  MenuListGetResultModel,
} from './model/banquet';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetBanquetTypeList = '/dic/findDic',
  AddBanquetType = '/dic/add',
  UpdateBanquetType = '/dic/update',
  DeleteBanquetType = '/dic/delete',

  GetRoomTypeList = '/dic/findDic',
  AddRoomType = '/dic/add',
  UpdateRoomType = '/dic/update',
  DeleteRoomType = '/dic/delete',

  GetMenuList = '/system/getMenuList',
}

export const getBanquetTypeList = (params: BanquetTypeParams) =>
  defHttp.get<BanquetTypeListGetResultModel>(
    {
      url: Api.GetBanquetTypeList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const addBanquetType = (params?: BanquetTypeParams) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.AddBanquetType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const updateBanquetType = (params?: BanquetTypeParams) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.UpdateBanquetType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const deleteBanquetType = (params?: { id: string }) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.DeleteBanquetType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2e67180002' },
    },
    { devUrl }
  );

export const getRoomTypeList = (params: RoomTypeParams) =>
  defHttp.get<RoomTypeListGetResultModel>(
    {
      url: Api.GetRoomTypeList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const addRoomType = (params?: RoomTypeParams) =>
  defHttp.post<RoomTypeListGetResultModel>(
    {
      url: Api.AddRoomType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const updateRoomType = (params?: RoomTypeParams) =>
  defHttp.post<RoomTypeListGetResultModel>(
    {
      url: Api.UpdateRoomType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const deleteRoomType = (params?: { id: string }) =>
  defHttp.post<RoomTypeListGetResultModel>(
    {
      url: Api.DeleteRoomType,
      params: { ...params, parentId: '402881847b2c2d77017b2c2edf340004' },
    },
    { devUrl }
  );

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.GetMenuList, params });
