const path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
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
				use: [
					"style-loader",
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
			},
		]
	},

	plugins: [
		new CleanWebpackPlugin([
			"dist",
		]),
	],
};

module.exports = config;