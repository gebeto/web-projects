const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
	// entry: path.resolve(__dirname, "src/index.ts"),
	entry: path.resolve(__dirname, "lib/index.js"),
};