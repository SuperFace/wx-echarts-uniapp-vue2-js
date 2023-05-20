import { https } from "../utils/request";

// 首页banner
async function getBannerList(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/home/banner_list",
    data,
  });
  return res;
}

// 总运动数据
async function getSportData(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/home/sport_data",
    data,
  });
  return res;
}

// 历史战绩
async function getHistoryRecord(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/sport_data/history_record",
    data,
  });
  return res;
}

// 数据趋势
async function getHistoryTrend(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/sport_data/history_trend",
    data,
  });
  return res;
}

// 排行榜点赞
async function getRankingList(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/thumb/ranking_list",
    data,
  });
  return res;
}

// 桑达运动会-单个赛点排行榜
async function getOneSiteRankingList(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/competition/one_site_ranking_list",
    data,
  });
  return res;
}

// 桑达运动会-比赛记录
async function geMeetingRecord(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/competition/record",
    data,
  });
  return res;
}

// 桑达运动会-是否晋级
async function geMeetingPromotion(data) {
  const res = await https({
    method: "POST",
    url: "/api/v1/wechat/applet/competition/promotion_window",
    data,
  });
  return res;
}

export {
  getBannerList,
  getSportData,
  getHistoryRecord,
  getHistoryTrend,
  getRankingList,
  getOneSiteRankingList,
  geMeetingRecord,
  geMeetingPromotion,
};
