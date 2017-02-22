var webpack = require('webpack'),
	path = require('path');

module.exports = {
	entry: {
		'dll-user': './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.js(x)*$/,
				loader: 'babel-loader',
				exclude: function(path) {
					var isNpmModule = !!path.match(/node_modules/);
					return isNpmModule;
				},
				query: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
			}
		]
	},
	plugins: [
		// new webpack.optimize.CommonsChunkPlugin('common.js', ['index']),
		// new webpack.DllReferencePlugin({
		// 	context: __dirname,
		// 	manifest: require('./dist/vendor-manifest.json')
		// }),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development'), //development & production
				'PUBLIC_PATH': JSON.stringify('http://127.0.0.1')
			}
		})
	]
}