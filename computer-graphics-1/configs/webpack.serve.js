const webpackMerge = require('webpack-merge');
const development = require('./webpack.development');

module.exports = (env) => webpackMerge(
	development(env),
	{
		devServer: {
			port: 5000,
			host: '0.0.0.0'
		},
	}
);