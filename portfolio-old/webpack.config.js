const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

function srcPath(subdir) {
	return path.join(__dirname, "src", subdir);
}

const config = {
	entry: path.resolve(__dirname, "src/index.tsx"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},

	resolve: {
		extensions: [".js", ".ts", ".tsx", ".jsx"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.(sa|sc|c)ss/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
						{
							loader: "postcss-loader",
							options: {
								plugins: [
									autoprefixer({
										browsers: ['ie >= 8', 'last 4 version'],
									})
								]
							}
						},
						"sass-loader",
					]
				})
			},
			{
				test: /\.(svg|png|jpe?g)/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: 'assets/images/[name].[ext]',
						},
					}
				],
			},
			{
				test: /\.(otf|ttf|woff2?)/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: 'assets/fonts/[name].[ext]',
						},
					}
				],
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			inject: false,
		}),
		new CleanWebpackPlugin([
			"dist",
		]),
		new ExtractTextWebpackPlugin("styles.css"),
	],

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 5000,
		host: "0.0.0.0",
	}
};

module.exports = config;