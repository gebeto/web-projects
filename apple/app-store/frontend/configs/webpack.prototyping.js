const path = require('path');

module.exports = (env) => ({
	mode: 'development',

	entry: path.resolve(__dirname, '../src/proto/index.tsx'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
	},

	devServer: {
		contentBase: path.join(__dirname, '..'),
		port: 5000
	}
});