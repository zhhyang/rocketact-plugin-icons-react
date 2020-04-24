module.exports = (api) => {
  api.chainWebpack((webpackChain) => {
    webpackChain.module
      .rule('svg')
      .test(/\.svg(\?v=\d+\.\d+\.\d+)?$/)
      .use('babel')
      .loader('babel-loader')
      .end()
      .use('svg')
      .loader('@svgr/webpack')
      .options({
        babel: false,
        icon: true,
      })
      .end()
      .end();
  });
};
