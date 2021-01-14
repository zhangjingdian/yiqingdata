/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';



/**
 * 配置request请求时的默认参数
 */

const request = extend({
  prefix: '/api',
  headers: {
    "authoration": "apicode",
    "apicode": "479f9156c5784dd092d42a58919ccc76"
  }
});

request.interceptors.request.use(async (url, options) => {
  return {
    url: `${url}`,
    options: { ...options }
  };
});

request.interceptors.response.use(async response => {
  if (response.status === 200) {
    const data = await response.clone().json();
    if (data.code === 200) {
      return data;
    } else {
      return data;
      // message.error(data.msg || errorMessage);
    }
  }
});

export default request;
