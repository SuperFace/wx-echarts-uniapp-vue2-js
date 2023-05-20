import {
  https
} from '../utils/request';

// 1：获取消息推送服务器
async function getPushMachine(data) {
  console.log("**********1：获取消息推送服务器**********")
  const res = await https({
    method: "POST",
    url: `/user/getPushMachine`,
    data
  })
  return res
}
export {
  getPushMachine
}
