const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
let vars = require('./variables');

module.exports = (env) => {
	let config;
	switch (env) {
		case 'dev':
			vars = vars.DEV;
			config = {
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
				},
				plugins: [
					new htmlWebpackPlugin({
						template: 'index_dev.html',
						filename: '../index.html',
						vars
					})
				]
			};
			break;
		default:
			vars = vars.PROD;
			config = {
				mode: 'production',
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
			break;
	}
	return config;
};
