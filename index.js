const merge = require('babel-merge');
module.exports = (api) => {
  api.chainWebpack((webpackChain) => {
    webpackChain.module
      .rule('compile')
      .use('babel')
      .tap((options) =>
        merge(options, {
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent:
                      '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
          ],
        }),
      );
  });
};
