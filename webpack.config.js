const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const replaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
let vars = require('./variables');

module.exports = (env) => {
	let config;
	let rulesReplaceInFilePlugin;

	switch (env) {
		case 'dev':
			vars = vars.DEV;
			rulesReplaceInFilePlugin = [{
				search: /%URI_PREFIX%/g,
				replace: vars.URI_PREFIX
			}];
			config = {
				mode: 'development',
				entry: './js/App.js',
				output: {
					path: path.resolve(__dirname, 'bundle'),
					filename: 'bundle.js',
					publicPath: `${vars.URI_PREFIX}bundle`
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
						filename: '../index.html'
					}),
					new replaceInFileWebpackPlugin([{
						dir: 'bundle',
						files: ['bundle.js'],
						rules: rulesReplaceInFilePlugin
					}, {
						files: ['index.html'],
						rules: rulesReplaceInFilePlugin
					}])
				]
			};
			break;
		default:
			vars = vars.PROD;
			rulesReplaceInFilePlugin = [{
				search: /%URI_PREFIX%/g,
				replace: vars.URI_PREFIX
			}];
			config = {
				mode: 'production',
				entry: './js/App.js',
				output: {
					path: path.resolve(__dirname, 'bundle'),
					filename: 'bundle.js',
					publicPath: `${vars.URI_PREFIX}bundle`
				},
				watch: true,
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
						filename: '../index.html'
					}),
					new replaceInFileWebpackPlugin([{
						dir: 'bundle',
						files: ['bundle.js'],
						rules: rulesReplaceInFilePlugin
					}, {
						files: ['index.html'],
						rules: rulesReplaceInFilePlugin
					}])
				]
			};
			break;
	}
	return config;
};
