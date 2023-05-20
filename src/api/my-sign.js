import { https } from '../utils/request';

/**
 * 获取我的签到记录
 * @param {*} data
 * @returns
 */
export function getSignList(data) {
    return https({
      method: 'POST',
      url: '/api/v2/wechat/applet/course_sign_record',
      data,
    });
}

/**
 * 课程统计数据
 * @param {*} data
 * @returns
 */
 export function getSignTotal(data) {
    return https({
      method: 'POST',
      url: '/api/v1/wechat/applet/course_total_data',
      data,
    });
}