var fs = require('fs');
fs.readFile('./app/index.html', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});