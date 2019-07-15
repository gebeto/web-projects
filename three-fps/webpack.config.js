const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (env) => ({
	entry: path.resolve(__dirname, 'src/index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				loader: 'babel-loader',
			},
			// {
			// 	test: /\.(svg|png|jpg)$/,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[name].[ext]',
			// 			outputPath: 'images/',
			// 		},
			// 	}
			// },
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'postcss-loader',
			// 		'sass-loader'
			// 	]
			// }
		]
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: false,
		})
	]
});


module.exports = config;