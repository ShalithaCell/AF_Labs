// Import the fs system module to read the file
const fs = require('fs');

// Add two variables containing path to the source and destination files.
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

// Create read stream and write stream from the source file and destination file
// respectively.
const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

// Pipe the read stream to write stream.
readStream.pipe(writeStream);

// Optionally listen to the data event of the read stream and print the output.
readStream.on('data', data => {
    console.log(data.toString());
});
