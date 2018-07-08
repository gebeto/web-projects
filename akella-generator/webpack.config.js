const path = require("path");

const config = {
	entry: path.resolve(__dirname, "src/index.ts"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},

	resolve: {
		extensions: [".css", ".ts", ".tsx", ".js", ".jsx"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loaders: [
					{
						loader: "awesome-typescript-loader",
						options: {
							configFileName: "tsconfig.json"
						}
					}
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		]
	},
};

module.exports = config;