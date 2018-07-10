var fs = require('fs');

fs.rename('CreatedUsingAppend.txt', 'Renamed-CreatedUsingAppend.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
}); 