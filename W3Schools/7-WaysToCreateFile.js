var fs = require('fs');

fs.appendFile('CreatedUsingAppend.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 

fs.open('CreatedUsingOpen.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 

fs.writeFile('CreatedUsingWrite.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 