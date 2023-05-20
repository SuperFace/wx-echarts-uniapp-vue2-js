import { https } from "../utils/request";

/**
 * 获取消息列表
 * @param {*} data
 * @returns
 */
export function getMessageList(data) {
  return https({
    method: "POST",
    url: "/api/v1/wechat/applet/message/list",
    data,
  });
}

/**
 * 获取消息详情
 * @param {*} data
 * @returns
 */
export function getMessageDetail(data) {
  return https({
    method: "POST",
    url: "/api/v1/wechat/applet/message/detail",
    data,
  });
}

/**
 * 获取消息未读数量
 * @param {*} data
 * @returns
 */
export function getMessageUnreadNum(data) {
  return https({
    method: "POST",
    url: "/api/v1/wechat/applet/message/unread_num",
    data,
  });
}
