/*
$(".content_page").live('pageinit', function(event) {
    if ($(".bottomAd img[src*=ad]").length >= 1) {
        console.log($(".bottomAd img[src*=ad]").length);
        $(".bottomAd").remove();
    }
*/

function allNotesUpdater() {
  this.update = function() {
    $('#allNotes').html(notes.getFirstNote().getTitle());
  }
}

var allNotes = new allNotesUpdater();

function Note(t, b) {
  var title = t;
  var body = b;
  
  this.getTitle = function() { return title };
  this.getBody = function() { return body };
}

function Notes() {
  var notes = [];
  
  this.addNote = function(note) {
    notes.push(note);
    //so messy but just to make it work before adding in official MVC
    allNotes.update();
  };
  
  this.getNotes = function() {
    return notes;
  };
  
  this.getFirstNote = function() {
    return notes[0];
  };
}

var notes = new Notes();

$("#clowns").on('pagecontainershow', function(event, ui) {
  alert("did it work?");
});
$("#fuck").on('click', function() {
  alert("you clicked on a clown");
});

$("#dialog-save").on('click', function() {
  var title = $('#title').val();
  var body = $('#body').val();
  $('#datbooty').html(body);
  notes.addNote(new Note(title, body));
  //alert(notes.getFirstNote().getTitle());
});
