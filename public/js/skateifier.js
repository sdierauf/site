//this js is "skate of the art"

//bsifier.js Stefan Dierauf 2013
//Generates sciency jargon

var load = function() {
//binding
var button = document.getElementById("generate");
var opener = document.getElementById("opener");
var jargon = document.getElementById("jargon"); 

//holds openers
var openerArray = [
"Dude, that was a totally gnarly",
"Bro, epically flawless",
"Mang, that was a totally WICKED",
"Shizzle my nizzle bro, that was an epically sweet",
"Damn, dude, that was a totally bangin'"
];

//hold's individual jargon elements
var jargonArray = [
"retro ",
"glazed ",
"triple ",
"dirty ",
"reverse ",
"reverse-",
"sliding ",
"trolley ",
"rolling ",
"diamond ",
"taco ",
"double ",
"triple ",
"subway ",
"mirror ",
"gravel "
];

//holds 'closers' (specific words that go well at the end of jargon) 
var closerArray = [
"slide",
"grinder",
"vault",
"yardsale",
"feedbag",
"ringer",
"slider",
"slam",
"slammer"
];

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

String.prototype.contains = function(string) {
  var ret = (this.toLowerCase().indexOf(string.toLowerCase()) > -1);
  console.log(ret)
  return ret;
}

//generates the jargon by picking an opener, picking a few unique, random pieces of jargon, 
//and then picking a closer
var genJargon = function() {
  opener.innerHTML = openerArray.randomElement();
  var jargonString = capitaliseFirstLetter(jargonArray.randomElement());
  for (var i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
    var rand = jargonArray.randomElement();
    while (jargonString.contains(rand)) {
      rand = jargonArray.randomElement();
    }
    jargonString += rand;
  }
  var randCloser = closerArray.randomElement();
  
  while(jargonString.contains(randCloser)) {
	  randCloser = closerArray.randomElement();
  }
  jargon.innerHTML = jargonString + randCloser;
  return jargonString;
}

button.onclick = function() {
  genJargon();
}

window.onload = function() {
  genJargon();
}
}

load();
