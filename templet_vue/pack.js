var fs = require('fs');

fs.readFile('./index.html', 'utf8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		fs.writeFile('./dist/index.html', data.toString(), (error) => {
			if (error) {
				console.log(error);
			} else {
				console.log('HTML file copy successful');
			}
		});
	}
});