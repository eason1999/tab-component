/**
 * 项目环境接口配置
 * @api: 数据接口
 * @static: 静态资源
 */
const config = {
  development: {
    api: '',
    static: '/',
  },
  test: {
    api: 'http://172.16.1.1:8800',
    static: 'http://test.pl.k6.com/h5/',
  },
  pre: {
    api: '//api.jc.648.cn/yufayu',
    static: '/',
  },
  production: {
    api: '//api.jc.648.cn',
    static: '/',
  },
}

const mock = {
  url: 'http://rap.ywwl.com:8080/mockjsdata/1',
}

module.exports = {
  BASE_URL: config[process.env.API_ENV].api,
  CONFIG: config,
  MOCK: mock,
}
