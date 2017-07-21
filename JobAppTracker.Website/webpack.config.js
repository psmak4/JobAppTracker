const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		vendor: ['jquery', 'knockout', 'history', 'crossroads'],
		app: './ts/app.ts'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'wwwroot/js'),
		publicPath: '/js/'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{ test: /\.html$/, loader: 'raw-loader' },
			{ test: /\.ts?$/, loader: 'awesome-typescript-loader' },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		})
	]
};
