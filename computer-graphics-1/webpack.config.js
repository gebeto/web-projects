const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const package = require('./package.json');

const envConfig = (env) => {
	return require(`./configs/webpack.${env}.js`)(env, {
		path: __dirname,
	});
}

const baseConfig = {
	entry: path.resolve(__dirname, 'src/index.tsx'),

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.scss?/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{ test: /\.tsx?/, loader: 'awesome-typescript-loader', },
			{ test: /\.pug$/, loader: 'pug-loader', },
			{ test: /\.hbs$/, loader: 'handlebars-loader' },
		]
	},

	plugins: [	
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'src/templates/index.hbs'),
			inject: false,
			templateParameters: {
				title: package.name,
			}
		}),
	]
};


module.exports = (env) => webpackMerge(baseConfig, envConfig(env));

