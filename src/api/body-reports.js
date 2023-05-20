import { https } from '@/utils/request';

// 课程list
export const getBodyReportList = async data => {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/bmd/report/list',
    data,
  });
  return res;
};

// 获取e560报告
export const getBodyReportE560 = data => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/bmd/report/view_e560',
    data,
  });
};

// 获取vrpro3报告
export const getBodyReportVrpro3 = data => {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/bmd/report/view_vrpro3',
    data,
  });
};
