const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = (env) => ({
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					warnings: false,
					// parse: {...options},
					// compress: {...options},
					// mangle: {
					// 	// ...options,
					// 	properties: true
					// },
					output: {
						comments: false,
						beautify: true,
						// ...options
					},
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_fnames: false,
				}
			})
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],

		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat',
		}
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
			},
			{
				test: /\.(svg|png|jpg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/',
					},
				}
			},
			{
				test: /\.scss$/,
				use: [
					// env.type === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
					'style-loader',
					'css-loader',
					// 'postcss-loader',
					'sass-loader'
				]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify("production")
		})
	]
});
