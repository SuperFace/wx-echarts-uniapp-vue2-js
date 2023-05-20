const path = require('path');
const webpack = require('webpack')
module.exports = {
  transpileDependencies: ['@dcloudio/uni-ui'],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@components': path.join(__dirname, './src/components'),
      },
    },
    plugins: [
			new webpack.DefinePlugin({
				'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV)
			})
		]
  },
};
