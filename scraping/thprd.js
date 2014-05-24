var request = require('request');
var cheerio = require('cheerio');

/*
pools = {
    'Aloha': 3,
    'Beaverton': 15,
    'Conestoga': 12,
    'Harman': 11,
    'Raleigh': 6,
    'Somerset': 22,
    'Sunset': 5,
    'Tualatin Hills': 2
};
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (pool in pools) {
    var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];
    request(url, ( function(pool) {
      return function (err, resp, body) {
        if (err) {
          throw err;
        }
        $ = cheerio.load(body);
        console.log(pool);
        //scrape scrape scrape!
      }
    })(pool));
}
*/

url = 'https://www.cs.washington.edu/education/';

taggy = 'a';

var links = [];

/*
request(url, (function(tagName) {
  return function (err, resp, body) {
    if (err) {
      throw err;
    }
    $ = cheerio.load(body);
    console.log(tagName);
    $(".sidebar " + tagName).each(function (index) {
      console.log($(this).attr("href"));
    })
    //let the scraping begin!
  }  
})(taggy));
*/


function trawl(links, rootURL) {
  request(rootURL, (function (list, root) {
    return function (err, resp, body) {
      if (err) {
        return;
      }
      $ = cheerio.load(body);
      $(".sidebar a").each( function (index) {
        var nextURL = $(this).attr("href");
        if (nextURL.indexOf("http") == -1) {
          nextURL = root.slice(0, -10) + nextURL;
        }
        console.log(nextURL);
        trawl(list, nextURL);
      })
    }  
  })(links, rootURL)); 
}

//unfucks extra chars

trawl(links, 'https://www.cs.washington.edu/education/');