import request from '../utils/request';
// 疫情动态播报
export async function getNews(payload) {
  return request('/query', {
    method: 'get',
    params: payload
  });
}

// 确诊地点小区查询
export async function getPlace(payload) {
  return request('/fynearby', {
    method: 'get',
    params: payload
  });
}

// 同程查询
export async function getArrive(payload) {
  return request('/tripQuery', {
    method: 'get',
    params: payload
  });
}

// 疫情分布地图
export async function getMap(payload) {
  return request('/spreadQuery', {
    method: 'get',
    params: payload
  });
}

// 谣言鉴别
export async function getRumor(payload) {
  return request('/identifyRumor', {
    method: 'get',
    params: payload
  });
}

// 疫情统计
export async function getStatistic(payload) {
  return request('/country', {
    method: 'get',
    params: payload
  });
}

// // 数据保存
// export async function save(payload) {
//   return request('invoice/save', {
//     method: 'post',
//     requestType: 'form',
//     data: payload
//   });
// }