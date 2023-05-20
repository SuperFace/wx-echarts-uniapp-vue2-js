import { https } from '../utils/request';

/**
 * 获取赛事详情
 * @param {*} data
 * @returns
 */
export function getGameDetail(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/detail',
    data,
  });
}

/**
 * 获取最近赛点
 * @param {*} data
 * @returns
 */
export function getNearSite(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/get_near_site',
    data,
  });
}

/**
 * 获取赛事列表
 * @param {*} data
 * @returns
 */
export function getGameList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/list',
    data,
  });
}

/**
 * 获取赛事规程
 * @param {*} data
 * @returns
 */
export function getGameRules(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/rule_desc',
    data,
  });
}

/**
 * 获取我的赛事列表
 * @param {*} data
 * @returns
 */
export function getUserCompetitionList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/user_competition_list',
    data,
  });
}

// 表单detail：
// const form = ref<iFrom>({
//   name: '',
//   form_type: FORM_TYPE_1, // 类型，1：单行文本，2：多行文本，3：单选，4：多选，5：下拉单选，6：文件
//   detail: {
//     default_text: '', // 默认文案 1.单行文本, 2.多行文本, 5.下拉单选
//     prompt: '', // 提示 1.单行文本, 2.多行文本, 3.单选, 4.多选, 5.下拉单选, 6.文件
//     check_repeat: 0, // 是否排重（0～不排重，1～排重） 1.单行文本
//     min_num: 0, // 1.单行文本, 2.多行文本, 4.多选,
//     max_num: 0, // 1.单行文本, 2.多行文本, 4.多选, 6.文件
//     select_options: [{name: '', value: 0}], // 3.单选:, 4.多选, 5.下拉单选,
//     file_type: 1, // 6、文件: // 文件类型，1：不限制，2：文档，3：图片，4：视频，5：音频，6：压缩，7：自定义
//     file_size: 1, // 6、文件; // 文件大小，单位m
//     text_number: 1, // 1~文本，2～数字
//     ext: '' // 6、文件
//   }
// });

/**
 * 表单列表
 * @param {*} data: {competition_id}
 * @returns {
 * 表单detail: 如上
 *  must_list: [
 *      {id: 1, name: 'xx', type: 1, detail: {}, value: ''}
 * ],
 * not_must_list: [
 *      {id: 2, name: 'xxx', type: 1, detail: {}, value: ''}
 * ]
 * }
 */
export function getFormList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/custom_form/list',
    data,
  });
}

/**
 * 报名
 * @param {*} data: {competition_id, region_id, form_value_list: [{id, value}]}
 * @returns
 */
export function postRegionApply(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/apply',
    data,
  });
}

/**
 * 赛事所有赛区排行榜
 * @param {*} data
 * @returns
 */
export function getNewOneSiteRankingList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/one_site_ranking_list',
    data,
  });
}
/**
 * 赛事比赛记录
 * @param {*} data
 * @returns
 */
export function getGameRecord(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/record',
    data,
  });
}

// 分组列表列表
export function getGameGroupList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/group_list',
    data,
  });
}
/**
 * 赛事阶段列表
 * @param {*} data
 * @returns
 */
export function getGameStageList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/stage_list',
    data,
  });
}

/**
 * 获取赛区和赛点列表
 * @param {*} data
 * @returns
 */
export function getGameSiteList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/region_list',
    data,
  });
}

/**
 * 赛事所有赛区排行榜
 * @param {*} data
 * @returns
 */
export function getRankingList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/ranking_list',
    data,
  });
}

/**
 * 扫码结果查询
 * @param {*} data
 * @returns
 */
export function getStartAppResult(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/get_start_app_result',
    data,
  });
}

/**
 * 取消赛事报名
 * @param {*} data
 * @returns
 */
export function cancelGameApply(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/cancel_apply',
    data,
  });
}

/**
 * 更换组别
 * @param {*} data
 * @returns
 */
export function changeGameGroup(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/change_group',
    data,
  });
}

/**
 * 获取里程榜单
 */
export function getDistanceBoardList(data = {}) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/competition/distance_ranking_list',
    data,
  });
}

