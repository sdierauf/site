
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();
app.use(express.compress());

// all environments
app.set('port', process.env.PORT || 3000); //NEEDS TO BE 80 FOR HTML TO WORK
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/', function(req, res) {
  res.render('../public/index.html');
});

//get for redesign of site
app.get('/beta', routes.index);
//should acually try to use jade and layouts etc... looks fucking cool.

app.get('/users', user.list);

app.get('/files', function(req, res){
	res.render('../views/files.jade');
});

app.get('/files/', function(req, res){
	res.render('../views/files.jade');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

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

app.get('/bashrack', function(req, res) {
	res.send('<pre>' + store + '</pre>');
});

app.get('/music-api', function(req, res) {
  res.json({test: "hello"});
});