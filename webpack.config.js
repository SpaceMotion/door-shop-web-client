const path = require('path');

module.exports = {
	mode: 'development',
	entry: './js/App.js',
	output: {
		path: path.resolve(__dirname, 'bundle'),
		filename: 'bundle.js'
	},
	watch: true,
	devtool: 'cheap-inline-module-source-map',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ["@babel/preset-react", "@babel/preset-env"]
				}
			}]
		}]
	}
};