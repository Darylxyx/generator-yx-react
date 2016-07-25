var fs = require('fs');

var config = fs.createReadStream('./webpack.config.js');

config.on('data', (data) => {

	var publicPath = (() => {

		var dataStr = data.toString();

		dataStr = dataStr.split('publicPath:')[1].split(',')[0].split('\'')[1];

		return dataStr;

	})();

	if (publicPath.substr(0,1) !== '/') {
		return;
	}

	var pathReg = new RegExp(publicPath, 'g');

	fs.readFile('./index.html', 'utf8', (err, data) => {
		if (!err) {
			data = data.toString().replace(pathReg, './dist/');
			fs.writeFile('./index.html', data.toString(), (err) => {
				if (!err) {
					console.log('HTML file path change successed');
				}
			});
		}
	});

	fs.readFile('./dist/bundle.css', 'utf8', (err, data) => {
		if (!err) {
			data = data.toString().replace(pathReg, './');
			fs.writeFile('./dist/bundle.css', data.toString(), (err) => {
				if (!err) {
					console.log('CSS bundle path change successed');
				}
			});
		}
	});

	fs.readFile('./dist/bundle.js', 'utf8', (err, data) => {
		if (!err) {
			data = data.toString().replace(pathReg, '../src/');
			fs.writeFile('./dist/bundle.js', data.toString(), (err) => {
				if (!err) {
					console.log('JavaScript bundle path change successed');
				}
			});
		}
	});

});
