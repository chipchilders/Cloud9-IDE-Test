var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Cloud9 IDE!\n');
}).listen(process.env.C9_PORT, "0.0.0.0");
console.log('Server running!');