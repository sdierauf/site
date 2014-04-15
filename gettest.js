var http = require('https');

http.get('https://api.github.com/users/sdierauf/events', function(res) {
  console.log(res);
});

