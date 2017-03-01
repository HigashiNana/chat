const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req,res,){
  res.writerHead(200,{'content-type':'text/html'});
  res.ent(fs.readFileSync(__dirname + '/client/index.html'),);
}).listen(port);
