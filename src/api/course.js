import { https } from '@/utils/request';

// 课程
export const getCourseInfo = async data => {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/course_detail',
    data,
  });
  return res;
};
// 课程list
export const getCourseList = async data => {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/course_list',
    data,
  });
  return res;
};
// 我的课程list
export const getMyCourseList = async data => {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/user_course_list',
    data,
  });
  return res;
};

// 团课列表
export const getGroupCourseList = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/group_course_list',
    data,
  });
};

// 获取7天的日期
export const getSevenDaysList = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/for_seven_days',
    data,
  });
};

// 我的团课列表
export const getMyGroupCourseList = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/user_group_course_list',
    data,
  });
};

// 签到记录
export const getSignRecordList = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/course_sign_record',
    data,
  });
};

// 签到记录2
export const getSignRecordList2 = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v2/wechat/applet/course_sign_record',
    data,
  });
};



// 签到记录3
export const getSignRecordList3 = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/training_course_sign_record',
    data,
  });
};

// 获取团课课程详情
export const getGroupCourseDetail = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/group_course_detail',
    data,
  });
};

// 获取团课课程支付确认页面
export const getGroupCourseConfirm = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/prepare_course_order_confirm',
    data,
  });
};

// 获取协议
export const getProtocal = (data = {}) => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/protocol/get',
    data,
  });
};
