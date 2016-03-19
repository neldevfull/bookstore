var basePath = __dirname;
var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res) {
    var stream = fs.createReadStream(path.join(basePath, req.url));
    stream.on('error', function() {
        res.writeHead(404);
        res.end();
    });
    stream.pipe(res);
}).listen(3000, "0.0.0.0");

console.log("Run server...");