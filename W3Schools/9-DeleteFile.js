var fs = require('fs');

fs.unlink('CreatedUsingOpen.txt', function (err) {
	if (err) throw err;
	console.log('File deleted!');
});