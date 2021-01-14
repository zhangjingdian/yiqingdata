
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  publicPath: '/yiqi/',
  hash: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/home' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '抗疫数据',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  proxy: {
    '/api': {
      target: 'https://api.yonyoucloud.com/apis/dst/ncov',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
}
