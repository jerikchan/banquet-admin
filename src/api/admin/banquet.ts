import {
  BanquetTypeParams,
  RoomTypeParams,
  FoodTypeParams,
  RoomParams,
  BanquetParams,
  MenuParams,
  BanquetTypeListGetResultModel,
  RoomTypeListGetResultModel,
  FoodTypeListGetResultModel,
  RoomListGetResultModel,
  BanquetListGetResultModel,
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

  GetMealTypeList = '/dic/findDic',
  AddMealType = '/dic/add',
  UpdateMealType = '/dic/update',
  DeleteMealType = '/dic/delete',

  GetRoomTypeList = '/dic/findDic',
  AddRoomType = '/dic/add',
  UpdateRoomType = '/dic/update',
  DeleteRoomType = '/dic/delete',

  GetFoodTypeList = '/foods/findFoods',
  AddFoodType = '/foods/add',
  UpdateFoodType = '/foods/update',
  DeleteFoodType = '/foods/delete',
  GetFoodMenuList = '/foods/findFoods',

  GetRoomList = '/banquet/findRooms',
  AddRoom = '/banquet/addRoom',
  // UpdateRoom = '/dic/update',
  DeleteRoom = '/banquet/deleteRoom',
  GetRoomInfo = '/banquet/findBanquetRoom',

  GetBanquetList = '/banquet/findRoomSchedules',
  AddBanquet = '/banquet/addSchedule',
  // UpdateBanquet = '/dic/update',
  DeleteBanquet = '/banquet/deleteSchedule',
  GetBanquetInfo = '/banquet/findRoomSchedule',

  GetMenuList = '/system/getMenuList',

  GetRoomScheduleByAgreementId = '/banquet/findRoomScheduleByAgreementId',
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

export const getMealTypeList = (params: BanquetTypeParams) =>
  defHttp.get<BanquetTypeListGetResultModel>(
    {
      url: Api.GetMealTypeList,
      params: { ...params, parentId: '402881847b8499b3017b84a16da30022' },
    },
    { devUrl }
  );

export const addMealType = (params?: BanquetTypeParams) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.AddMealType,
      params: { ...params, parentId: '402881847b8499b3017b84a16da30022' },
    },
    { devUrl }
  );

export const updateMealType = (params?: BanquetTypeParams) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.UpdateMealType,
      params: { ...params, parentId: '402881847b8499b3017b84a16da30022' },
    },
    { devUrl }
  );

export const deleteMealType = (params?: { id: string }) =>
  defHttp.post<BanquetTypeListGetResultModel>(
    {
      url: Api.DeleteMealType,
      params: { ...params, parentId: '402881847b8499b3017b84a16da30022' },
    },
    { devUrl }
  );

export const getRoomTypeList = (params?: RoomTypeParams) =>
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

export const getFoodMenuList = (params?: FoodTypeParams) =>
  defHttp.get<FoodTypeListGetResultModel>(
    {
      url: Api.GetFoodMenuList,
      params,
    },
    { devUrl }
  );

export const getFoodTypeList = (params: FoodTypeParams) =>
  defHttp.get<FoodTypeListGetResultModel>(
    {
      url: Api.GetFoodTypeList,
      params,
    },
    { devUrl }
  );

export const addFoodType = (params?: FoodTypeParams) =>
  defHttp.post<FoodTypeListGetResultModel>(
    {
      url: Api.AddFoodType,
      params,
    },
    { devUrl }
  );

export const updateFoodType = (params?: FoodTypeParams) =>
  defHttp.post<FoodTypeListGetResultModel>(
    {
      url: Api.UpdateFoodType,
      params,
    },
    { devUrl }
  );

export const deleteFoodType = (params?: { id: string }) =>
  defHttp.post<FoodTypeListGetResultModel>(
    {
      url: Api.DeleteFoodType,
      params,
    },
    { devUrl }
  );

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.GetMenuList, params });

export const getRoomList = (params?: RoomParams) =>
  defHttp.get<RoomListGetResultModel>({ url: Api.GetRoomList, params }, { devUrl });

export const getRoomInfo = (params?: RoomParams) =>
  defHttp.get<RoomListGetResultModel>({ url: Api.GetRoomInfo, params }, { devUrl });

export const getBanquetInfo = (params?: RoomParams) =>
  defHttp.get<RoomListGetResultModel>({ url: Api.GetBanquetInfo, params }, { devUrl });

export const addRoom = (params?: RoomParams) =>
  defHttp.post<RoomListGetResultModel>({ url: Api.AddRoom, params }, { devUrl });

// export const updateRoom = (params?: RoomParams) =>
//   defHttp.post<RoomListGetResultModel>({ url: Api.UpdateRoom, params }, { devUrl });

export const deleteRoom = (params?: { id: string }) =>
  defHttp.post<RoomListGetResultModel>({ url: Api.DeleteRoom, params }, { devUrl });

export const getBanquetList = (params?: BanquetParams | any) =>
  defHttp.get<BanquetListGetResultModel>({ url: Api.GetBanquetList, params }, { devUrl });

export const getRoomScheduleByAgreementId = (params?: {}) =>
  defHttp.get<{}>({ url: Api.GetRoomScheduleByAgreementId, params }, { devUrl });

export const addBanquet = (params?: BanquetParams) =>
  defHttp.post<BanquetListGetResultModel>({ url: Api.AddBanquet, params }, { devUrl });

// export const updateBanquet = (params?: BanquetParams) =>
//   defHttp.post<BanquetListGetResultModel>({ url: Api.UpdateBanquet, params }, { devUrl });

export const deleteBanquet = (params?: { id: string }) =>
  defHttp.post<BanquetListGetResultModel>({ url: Api.DeleteBanquet, params }, { devUrl });

export const getScheduleTypeList = () =>
  Promise.resolve([
    {
      value: '0',
      label: '日间上午',
    },
    {
      value: '1',
      label: '午宴',
    },
    {
      value: '2',
      label: '日间下午',
    },
    {
      value: '3',
      label: '晚宴',
    },
  ]);
