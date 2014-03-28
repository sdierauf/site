
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

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

