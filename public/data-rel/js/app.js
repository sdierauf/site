//var NotesApp = (function(){
  
  var App = {
    stores: {}
    
  }
  
  App.stores.notes = new Store('notes');
  
  var Note = Backbone.Model.extend({
    //title: "fuck you gumby",
    
    localStorage: App.stores.notes,
    
    intialize: function() {
      console.log("do something");
      if(!this.get('title')) {
        this.set({title: "New Note for" + Date()});
        console.log("big");
      };
      
      if (!this.get('body')) {
        this.set({body: "No content."});
      };
    }
    
  });
  
  //return App;
 
//})();