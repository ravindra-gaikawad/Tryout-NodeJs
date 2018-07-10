
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
console.log("Blocking Code");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");
console.log("Non-Blocking Code");

// Workaround to not close Console, So that we can read output.
setTimeout(function () {
    process.exit();
}, 50000);