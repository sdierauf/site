var c = document.getElementById('draw');
var ctx = c.getContext('2d');
var button = document.getElementById('make');

var colorArray = [
'#FF0000',
'#AA1296',
'#009090',
'#1460FF',
];

Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)];
};

var rColor = function() {
  var color = '#';
  var hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
  for (var i = 0; i < 6; i++) {
    color += hex.randomElement();
  }
  return color;
}

var rInt = function(max) {
  return Math.floor(Math.random() * (max + 1));
}

var makeSquare = function() {
  ctx.fillStyle = rColor();
  ctx.fillRect(rInt(100), rInt(100), rInt(540)+100, rInt(540)+100);
}

button.onclick = function() {
  makeSquare();
}