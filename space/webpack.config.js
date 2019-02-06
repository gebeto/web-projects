const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const fs = require('fs');

const config = {
	entry: "./src/index.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "awesome-typescript-loader"
			},
		]
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		open: true,
	},

	plugins: []
};

// if (process.env.npm_lifecycle_event.match(/^build/)) {
// 	config.plugins.push(
// 		new UglifyJsPlugin({
// 			uglifyOptions: {
// 				warnings: false,
// 				unsafe: true,
// 				compress: {
// 					drop_console: true
// 				}
// 			}
// 		})
// 	);
// }

module.exports = config;