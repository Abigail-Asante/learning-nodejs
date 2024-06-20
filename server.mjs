import {createServer} from 'node:http';

const server = createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/html'});
    res.end('server is running');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server is listening');
});


// Arrow functions
function handleRequest() {}
const handleRequest = () => {}






import {createServer} from 'node:http'

const Server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('server is running');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server is running');
});



import {createServer} from 'node:http';

const server = createServer((req, req) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('server is running');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server is running')
})