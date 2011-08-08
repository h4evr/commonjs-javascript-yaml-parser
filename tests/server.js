var http = require('http');
var yaml = require('../src/yaml.js');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain' });
	var data = yaml.parseFile('example.yml');
	res.end(JSON.stringify(data));
}).listen(8080, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8080');