const path = require('path');
const fs = require('fs');

const config = {
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

if (process.env.npm_lifecycle_event === 'build:ggi') {
	const newOutpupPath = path.resolve(__dirname, '../../gebeto.github.io/for-fun/space');
	if (fs.existsSync(newOutpupPath)) {
		config.output.path = newOutpupPath;
	}
}

module.exports = config;