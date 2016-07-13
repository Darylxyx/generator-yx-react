var fs = require('fs');
// fs.readFile('./app/index.html', 'utf-8', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });
var file = fs.createReadStream('./app/index.html'),
	out = fs.createWriteStream('./bundle/index.html');

file.pipe(out);