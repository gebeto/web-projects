const path = require('path');
const webpack = require('webpack');

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
				test: /\.tsx?$/,
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
	}
});


module.exports = config;