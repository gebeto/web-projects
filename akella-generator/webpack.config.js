const path = require("path");

const config = {
	entry: path.resolve(__dirname, "src/index.ts"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		]
	},
};

module.exports = config;