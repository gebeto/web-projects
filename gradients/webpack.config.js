const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = {
	entry: path.resolve(__dirname, "src"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [
	]
};

if (process.env.npm_lifecycle_event === 'build') {
	config.plugins.push(
		new UglifyJSPlugin({
			uglifyOptions: {
				warnings: false,
				unsafe: true,
				compress: {
					drop_console: true,
					dead_code: true,
				}
			}
		})
	);
}

module.exports = config;