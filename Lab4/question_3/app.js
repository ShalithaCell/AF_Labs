// Import the fs system module to read the file
const fs = require('fs');

// Use the system variable __dirname to set the file location
const fileName = __dirname + '/test.txt';

// Read the file using readFile asynchronous method and print the content of the file
// to console
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());

    // Try printing the value of data without toString method
    console.log(data);
});

// Use the readFileSync method to read the file synchronously.
const data = fs.readFileSync(fileName);
console.log(data.toString());
