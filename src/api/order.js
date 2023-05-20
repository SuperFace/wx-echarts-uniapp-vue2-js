import { https } from '../utils/request';

async function getOrderList(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/order_list',
    data,
  });
  return res;
}

async function scanQrcode(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v2/wechat/applet/qrcode/scan',
    data,
  });
  return res;
}

//  扫码后，获取定价列表: 可用剩余时间、定价列表
async function priceGoodsList(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/price_goods/list',
    data,
  });
  return res;
}

//  剩余时间，启动应用
async function startGame(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v2/wechat/applet/start_app',
    data,
  });
  return res;
}

// 订单详情
async function getOrderDetail(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/order_detail',
    data,
  });
  return res;
}

// 取消订单
async function cancelOrder(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/order_cancel',
    data,
  });
  return res;
}

// 订单确认
async function orderConfirm(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/prepare_order_confirm',
    data,
  });
  return res;
}

// 提交订单
async function doOrder(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/order_confirm',
    data,
  });
  return res;
}

// 是否支付成功
async function fetchPayResult(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/order_pay_success_jump',
    data,
  });
  return res;
}

// 历史订单支付
async function orderPay(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/order_pay',
    data,
  });
  return res;
}

export {
  getOrderList,
  scanQrcode,
  priceGoodsList,
  startGame,
  getOrderDetail,
  orderConfirm,
  cancelOrder,
  doOrder,
  orderPay,
  fetchPayResult,
};
