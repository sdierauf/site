var words = "Bring me the way to the Howlisson days she got that way I just want to paint all day with you I want to bring it to the how this ways that paint all day with you and stop it stop two main main name. Two main aim ain't my fault no more than eight fault no more and bring Bob and Jake Henri she got I just want to stay painting with you and paying the weight with you and bring the brains out and how the sun with you half brain bring me the sun to you and half main and you know the one is it through into the hit hit flow and got a bring yo and if stay if diorite tight until into Rick stay and you know and you know question did just didn't your piston piston make her piston yeah his stingy a picture and rip Bing and Rippon stuff history student piston yes and kiss and in piss and his 10 Tyrus don't Tyris 10 Cristom pump should rent check rock stem stuff in Clifton stuff if for a fee The writing tried to buy two hi stiff stuff in talks into express intent to stress piston come into piston ring and piston and brimstone and piston piston of me and piston piston kite Cristen dowd piston piston doubt and histamine histamine his his script and piston off of us and puff gift gift gift stuff enough Lafayette hate estate tear liquidate it to liquid to liquid two in tranquility in tranquil until liquid Tide retiree of me";
var wordArray = words.split(" ");
var shitpile = document.getElementById("shit");

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

var randy = function(num) {
  return Math.floor(Math.random() * num);
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var makeASentence = function() {
  var sentence = capitaliseFirstLetter(wordArray.randomElement());
  for (var i = 0; i < randy(20) + 5; i++) {
    sentence += " " + wordArray.randomElement();
  }
  sentence += ". ";
  return sentence + "\n";
}

window.onload = function() {
  var output = "";
  for (var i = 0; i < randy(5) + 3; i++) {
    for (var j = 0; j < randy(10) + 2; j++) {
      output += makeASentence();
    }
    output += "\n\n";
  }
  shitpile.innerHTML = output;
}