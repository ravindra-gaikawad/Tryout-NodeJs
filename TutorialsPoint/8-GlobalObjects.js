console.log(__filename);

console.log(__dirname);

function printHello() {
    console.log("Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

// Now call above function after 2 seconds
setInterval(printHello, 2000);

// Workaround to not close Console, So that we can read output.
setTimeout(function () {
    process.exit();
}, 50000);