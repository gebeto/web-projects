const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, { path }) => ({
	mode: 'production',
	plugins: [	
		new CleanWebpackPlugin(['dist/*'], {
			root: path
		}),
	]
});