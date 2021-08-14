import {
  ChannelParams,
  MenuParams,
  ChannelListGetResultModel,
  MenuListGetResultModel,
} from './model/customer';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { devUrl } = useGlobSetting();

enum Api {
  GetChannelList = '/dic/findDic',
  AddChannel = '/dic/add',
  UpdateChannel = '/dic/update',
  DeleteChannel = '/dic/delete',

  GetMenuList = '/system/getMenuList',
}

export const getChannelList = (params: ChannelParams) =>
  defHttp.get<ChannelListGetResultModel>(
    {
      url: Api.GetChannelList,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const addChannel = (params?: ChannelParams) =>
  defHttp.post<ChannelListGetResultModel>(
    {
      url: Api.AddChannel,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const updateChannel = (params?: ChannelParams) =>
  defHttp.post<ChannelListGetResultModel>(
    {
      url: Api.UpdateChannel,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const deleteChannel = (params?: { dicId: string }) =>
  defHttp.post<ChannelListGetResultModel>(
    {
      url: Api.DeleteChannel,
      params: { ...params, parentId: '402881847b2c2d77017b2c2eb4c70003' },
    },
    { devUrl }
  );

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.GetMenuList, params });
