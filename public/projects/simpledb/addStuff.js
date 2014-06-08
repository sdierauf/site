var Datastore = require('nedb')
  , db = new Datastore({filename: 'data.db', autoload: true});


var test = {
  name: 'doStuff.js worked!'
}

db.insert(test, function(err, newDoc) {
  errorCheck(err)
  
});

db.findOne({name: 'Larry'}, function(err, doc) {
  errorCheck(err);
  console.log(doc.name);
  console.log("it worked a lot!");
  
});

function errorCheck(err) {
  if (err) {
    console.log(err);
  }
}