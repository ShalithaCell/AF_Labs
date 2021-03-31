// Import the OS system module to your file
const os = require('os');

// Obtain System architecture, platform and number of CPUs from the OS module
// and print them to the console.
console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());
