const http = require('http');
const fs = require('fs');
const socketio = require('socket.io');

const port = 3000;

const server = http.createServer(function(req,res){
  res.writeHead(200,{'content-type':'text/html'});
  res.end(fs.readFileSync(__dirname + '/client/index.html'));
}).listen(port);

//socketioとの結びつけ
const io = socketio.listen(server);
//ioのセットに対してイベントを登録
io.sockets.on('connection',function(socket){
  console.log(socket);
  socket.on('message',function(data){
    console.log(data);
    //飛んできたメッセージのデータを返す
    io.sockets.emit('from_server',{value:data.value});
  });
});
