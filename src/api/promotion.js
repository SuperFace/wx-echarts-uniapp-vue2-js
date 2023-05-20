import { https } from '@/utils/request';

// 获取首页弹窗
export const getDialogInHomePage = async data =>
  https({
    method: 'POST',
    url: '/api/v1/wechat/applet/event_collect/poll',
    data,
  });

// 获取自定义表单数据
export const getCollectForm = async data =>
  https({
    method: 'POST',
    url: '/api/v1/wechat/applet/event_collect/list_form',
    data,
  });

// 提交自定义表单数据
export const submitCollectForm = async data =>
  https({
    method: 'POST',
    url: '/api/v1/wechat/applet/event_collect/apply',
    data,
  });
