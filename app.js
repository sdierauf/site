
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var compress = require('compression')();
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
app.use(compress);

// all environments
app.set('port', process.env.PORT || 80); //NEEDS TO BE 80 FOR HTML TO WORK
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger());
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.get('/', function(req, res) {
  res.render('../public/index.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var net = require('net');
