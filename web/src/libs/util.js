import axios from 'axios';

let util = {};

const ajaxUrl = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? 'http://49.234.238.74:3001/v1'
  // 线上环境api接口
  : 'http://api.boblog.com/v1';

util.ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 30000
});

util.api = ajaxUrl;
util.oauthUrl = ajaxUrl;

export default util;
