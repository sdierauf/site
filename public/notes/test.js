var Game = Backbone.Model.extend({
  initialize: function() {
    console.log('initialize has been called');
  },
  
  defaults: {
    name: 'Default Title',
    releaseDate: 2014
  }
  
});

var portal = new Game({name: 'Portal 2', releaseDate: 2011});

console.log(portal.get('releaseDate'));

var GamesCollection = Backbone.Collection.extend({
  model: Game,
  old: function() {
    return this.filter(function(game){
      return game.get('releaseDate') < 2014;
    });
  }
});

var games = new GamesCollection();

games.on('add', function(game) {
  console.log('added ' + game.get('name')); 
});


games.add(portal)

var GamesView = Backbone.View.extend({
  tagName: 'li',
  
  
});