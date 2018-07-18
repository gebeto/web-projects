const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
	entry: path.resolve(__dirname, "src/index.tsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},

	resolve: {
		extensions: [".ts", ".tsx", ".css", ".js", ".jsx"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		]
	},

	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			inject: false,
			template: path.resolve(__dirname, "src/index.html"),
		}),
	],

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		// compress: true,
		port: 9000
	},
};

module.exports = config;