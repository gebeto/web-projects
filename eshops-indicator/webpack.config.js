const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	// entry: path.resolve(__dirname, "src/index.ts"),
	entry: path.resolve(__dirname, "lib/index.js"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	module: {
		rules: [
			{
				test: /.ts$/,
				loader: "awesome-typescript-loader",
			}
		],
	},

	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				minify: function(file, sourceMap) {
					// https://github.com/mishoo/UglifyJS2#minify-options
					const uglifyJsOptions = {
						mangle: {
							properties: true,
						}
					};

					if (sourceMap) {
						uglifyJsOptions.sourceMap = {
							content: sourceMap,
						};
					}

					return require('uglify-js').minify(file, uglifyJsOptions);
					}
				}
			}
		)
	],

	// optimization: {
	// 	minimizer: [
	// 	]
	// }
};