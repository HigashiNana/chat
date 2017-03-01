const http = require('http');
const fs = require('fs');
const socketio = require('socketio');

const port = 3000;

const server = http.createServer(function(req,res,){
  res.writerHead(200,{'content-type':'text/html'});
  res.ent(fs.readFileSync(__dirname + '/client/index.html'),);
}).listen(port);

//socketioとの結びつけ
const io = socketio.listen(server);
//ioのセットに対してイベントを登録
io.sockets.on('connection',function(socket){
  console.log(socket);
  socket.on('massage',function(){
    //飛んできたメッセージのデータを返す
    io.sockets.emit('from_server',{value:data.value});
  });
});
