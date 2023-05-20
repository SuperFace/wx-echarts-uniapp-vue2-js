import { https } from '@/utils/request';

// 卡包list
export const getMyVcardList = async data => {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/user_vitality_card',
    data,
  });
  return res;
};

// 卡包使用记录
export const getMyVcardRecord = async data => {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/user_vitality_card_use_record',
    data,
  });
  return res;
};

// 获取元气卡列表
export const getVcardList = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/vitality_card_list',
    data,
  });
};

// 获取元气卡详情
export const getVcardDetail = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/vitality_card_detail',
    data,
  });
};

// 订单选择元气卡列表
export const getOrderVcardList = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/order_vitality_card',
    data,
    showLoading: true,
  });
};
