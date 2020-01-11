const http = require('http');

const server = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    console.log('New request served!')
});

server.listen(3000, () => console.log('listening on port 3000'));

process.once('SIGINT', () => {
    console.log('closing...')
    server.close()
})