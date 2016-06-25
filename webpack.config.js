var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.join(__dirname, 'bundle'),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
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
	}
}