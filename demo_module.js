var http = require('http');
var dt = require('./myfirstmodule');        // Gør så den indtager et modul. 
                                            // ./ betyder at den fil som er required er i samme mappe som den fil der requirer.
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());       // Viser dato og tidspunkt for boot af programmet. 
    res.end();
}).listen(8080);