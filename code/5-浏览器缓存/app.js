var http = require('http')
var url = require('url')
var fs = require('fs')
var Port = 8080

var server = http.createServer(function (request, response) {
	var pathName = url.parse(request.url).pathName;
	var realPath = 'assets'+ pathName;
	fs.exists(realPath, function (exists) {
		if (exists) {
			response.writeHead(404, {
				'content-type': 'text/plain',
			})
			response.write('this request URL '+ pathName + ' was not found');
			response.end();
		} else {
			fs.readFile(realPath, 'binary', function (err, file) {
				if (err) {
					response.writeHead(500, {
						'content-type': 'text/plain',
					})
				} else {
					response.writeHead(200, {
						'content-type': 'text/plain',
					})
					response.write(file, 'binary');
					response.end();
				}
			})
		}
	})
})


server.listen(Port);
console.log('server running at port: ' + Port)
