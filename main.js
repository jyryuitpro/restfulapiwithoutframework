const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/posts' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('List of post');
        // req.url === '/posts/:id'
    } else if (req.url && /^\/posts\/[a-zA-Z0-9-_]+$/.test(req.url)) {
        res.statusCode = 200;
        res.end('Some content of the post');
    } else if (req.url === '/posts' && req.method === 'POST') {
        res.statusCode = 200;
        res.end('Creating post');
    } else  {
        res.statusCode = 404;
        res.end('Not Found');
    }

    res.statusCode = 200;
    res.end('Hello!');
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}`);
})