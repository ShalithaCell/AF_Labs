// Import the http module from the core libraries
const http = require('http');

// Create a httpServer that listens to port 3000 and return HTML with Hello World
// text in h1 header upon GET request.

// Optionally add a POST request that accepts form field name and return HTML
// with Hello {name}.

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }

}).listen(3000, () => {
    console.log('Server is listening to port 3000')
});

