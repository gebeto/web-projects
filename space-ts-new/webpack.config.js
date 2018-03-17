const path = require('path');

module.exports = {
	// mode: 'production',
	entry: "./src/index.ts",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		loaders: [
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
	}
};