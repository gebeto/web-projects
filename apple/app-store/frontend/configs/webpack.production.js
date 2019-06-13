const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin");


module.exports = (env) => {
	const config = {
		mode: 'production',

		optimization: {
			minimizer: [
				new UglifyJsPlugin({
					uglifyOptions: {
						warnings: false,
						output: {
							comments: false,
							beautify: false,
						},
						toplevel: false,
						nameCache: null,
						ie8: true,
						keep_fnames: false,
					}
				})
			]
		},

		plugins: [
			// new OptimizeCSSAssetsPlugin({}),
			// new MiniCssExtractPlugin({
			// 	filename: 'cart.css',
			// }),
			// new CompressPlugin({
			// 	test: /\.(js|css)/i
			// }),
		]
	};
	
	if (env.analysis) {
		config.plugins.push(
			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
			})
		)
	}

	return config;
};