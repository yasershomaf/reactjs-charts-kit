const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
};
