const path = require('path');


const config = {
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'awesome-typescript-loader'
				}
			}, {
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		],
	},
};


module.exports = config;