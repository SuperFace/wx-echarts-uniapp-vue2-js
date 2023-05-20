import { https } from '../utils/request';

/**
 * 用户私教课列表
 * @param {*} data
 * @returns
 */
export function getPcourseList(data) {
    return https({
      method: 'POST',
      url: '/api/v1/wechat/applet/private_course/user_course_list',
      data,
    });
}

/**
 * 取消预约
 * @param {*} data
 * @returns
 */
 export function getPcourseCancel(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/cancel_reserve',
    data,
  });
}


/**
 * 签到
 * @param {*} data
 * @returns
 */
 export function getPcourseSign(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/sign',
    data,
  });
}

/**
 * 用户课程报名详情
 * @param {*} data
 * @returns
 */
 export function getPcourseYuy(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/user_course_info',
    data,
  });
}

/**
 * 用户预约详情
 * @param {*} data
 * @returns
 */
 export function getPcourseYuyDetail(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/reservation_info',
    data,
  });
}

/**
 * 获取用户预约时间段
 * @param {*} data
 * @returns
 */
 export function getPcourseYuyTimes(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/reservation_times',
    data,
  });
}

/**
 * 预约
 * @param {*} data
 * @returns
 */
 export function doPcourseYuy(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/reserve',
    data,
  });
}
