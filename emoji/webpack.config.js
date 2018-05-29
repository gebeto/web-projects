const path = require("path");


const config = {
	entry: path.resolve(__dirname, "src/index.tsx"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".js", ".ts", ".tsx", ".css"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.(css)$/,
				use: ["style-loader", "css-loader"],
			},
		]
	},
	plugins: [],
};


module.exports = config;