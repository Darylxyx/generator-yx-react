var webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: 'bundle',
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
			        presets: ['es2015']
			    }
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css', {allChunks: true})
	]
}