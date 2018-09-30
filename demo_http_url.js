var http = require('http');
http.createServer(function (req, res) {     // req = request for client, res = response to client.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);