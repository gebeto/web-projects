const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const envConfig = (env) => require(`./configs/webpack.${env.type}.js`)(env);

const baseConfig = (env) => ({
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../../eshopadmin/static/js'),
		filename: '_template.js',
		publicPath: '/static/',
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify(env.type)
		})
	]
});


module.exports = (env) => {
	console.log(env);
	return webpackMerge.smart(baseConfig(env), envConfig(env));
}