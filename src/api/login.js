import { https } from '../utils/request';

async function getOpenId(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/get_openid',
    data,
  });
  return res;
}

async function userLogin(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/login',
    data,
  });
  return res;
}

async function bindPhone(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/bind_phone',
    data,
  });
  return res;
}

async function logout(data) {
  const res = await https({
    method: 'POST',
    url: '/api/v1/wechat/applet/logout',
    data,
  });
  return res;
}

function getUserProfile(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/get_profile',
    data,
  });
}

function saveUserProfile(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/edit_users',
    data,
  });
}

function getRandomPortraitList(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/random_portrait',
    data,
  });
}

function rebindUser(data) {
  return https({
    method: 'POST',
    url: '/api/v1/wechat/applet/bmd/rebind_user',
    data,
  });
}

export { getOpenId, userLogin, bindPhone, logout, getUserProfile, saveUserProfile, getRandomPortraitList, rebindUser };
