var net = require('net');

store = 'Im stored in store';

net.createServer(function (socket) {
  //on connect, save bash to a variable
  //socket.write("Cool, connected to port 1111\n");
  socket.write(store);
  console.log(socket.remoteAddress + " downloaded bashrc\n");

}).listen(1111);

net.createServer(function (socket) {
  //socket.write("Cool, connected to port 2222");
  
  socket.on('data', function (data) {
    //socket.write(data+"\n");
    store = String(data);
    console.log(socket.remoteAddress + " uploaded bashrc\n");
  });

}).listen(2222);

console.log("servers started on 1111 and 2222");

