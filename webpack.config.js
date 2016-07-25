var webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: 'dist',
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
				loader: 'babel-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=resource/images/[hash:8].[name].[ext]'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css', {allChunks: true})
	]
}