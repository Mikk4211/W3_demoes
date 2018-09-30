var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  /* bruger url module til at lave querystring til et object */
  var q = url.parse(req.url, true).query;

  /* printer undefined, undefined. Dette ændres ved at ændre i URL'en for localhost. */
  var txt = q.year + " " + q.month;
  
  /* response end: txt (indtager txt som parameter, og printer det) */
  res.end(txt);
}).listen(8080);