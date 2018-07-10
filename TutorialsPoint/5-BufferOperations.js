
// uninitiated Buffer of 20 octets
var buffer1 = new Buffer(20);
len = buffer1.write("Simply Learning");
console.log("Octets written : " + len);

// Buffer from a given array
var buffer2 = new Buffer([10, 20, 30, 40, 50]);
len = buffer2.write("Easy Learning");
console.log("Octets written : " + len);

// Buffer from a given string and optionally encoding type
var buffer3 = new Buffer("Simply Easy Learning", "utf-8");
len = buffer3.write("Simply Easy Learning");
console.log("Octets written : " + len);

// Reading from Buffers
console.log(buffer3.toString('ascii'));       // outputs: Simply Easy Learning
console.log(buffer3.toString('ascii', 0, 6));   // outputs: Simply
console.log(buffer3.toString('utf8', 0, 6));    // outputs: Simply
console.log(buffer3.toString(undefined, 0, 6)); // encoding defaults to 'utf8', outputs Simply


// Convert Buffer to JSON
var json = buffer3.toJSON(buffer3);
console.log(json);

// Concatenate Buffers
var buffer4 = Buffer.concat([buffer1, buffer3]);
console.log("buffer4 content: " + buffer4.toString());

// Compare Buffers
var result =buffer4.compare(buffer3);

if (result < 0) {
    console.log(buffer4 + " comes before " + buffer3);
} else if (result === 0) {
    console.log(buffer4 + " is same as " + buffer3);
} else {
    console.log(buffer4 + " comes after " + buffer3);
}

// Copy Buffer
buffer4.copy(buffer3);
console.log("buffer4 as copied content: " + buffer4.toString());

// Slicing a buffer
var buffer4 = buffer3.slice(0, 5);
console.log("buffer4 as sliced content: " + buffer4.toString());

// length of the buffer
console.log("buffer4 length: " + buffer4.length);

// Workaround to not close Console, So that we can read output.
setTimeout(function () {
    process.exit();
}, 50000);
