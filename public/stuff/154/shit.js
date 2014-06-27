window.onload = function() {
  var stuff = document.getElementById("stuff");
  var butt = document.getElementById("go");
  
  addLots(stuff, 10);
  
  butt.onclick = blargh;
}

function blargh() {
  addLots(stuff, 1);
}

function addLots(daddy, count) {
  for (var i = 0; i < count; i++) {
    var square = document.createElement("div");
    square.className = "square";
    daddy.appendChild(square);
  }
}