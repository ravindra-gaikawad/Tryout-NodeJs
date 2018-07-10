var fs = require('fs');

fs.appendFile('CreatedUsingAppend.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
}); 

fs.writeFile('CreatedUsingWrite.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
}); 