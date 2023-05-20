import { https } from '@/utils/request';

// 私教首页列表
export const getPrivateCourseList = async data =>
  https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/home',
    data,
  });

// 包月私教详情
export const getMonthPrivateCourseDetail = async data =>
  https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/monthly_course_detail',
    data,
  });

// 私教详情
export const getPrivateCoachDetail = async data =>
  https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/teacher_detail',
    data,
  });

// 课时私教课程详情
export const getHourPrivateCourseDetail = async data =>
  https({
    method: 'POST',
    url: '/api/v1/wechat/applet/private_course/class_num_course_detail',
    data,
  });
