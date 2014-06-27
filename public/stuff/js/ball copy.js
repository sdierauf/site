var canvas = document.getElementById('field');
var ctx = canvas.getContext('2d');
var dx = 1;
var dy = 2;
//var bar=new Bar(400,500);
var circle=new Circle(400,30,10);
var dxBar=6;
var timer;
var barImg;

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.draw = function() {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.fill();
  }
}

function init() {
  //window.addEventListener("keydown",doKeyDown,false);
  //barImg=document.getElementById("bar");
  timer = setInterval(draw(), 10);
  return timer;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FAF7F8";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#003300";
  circle.draw();
  circle.x += 1;
}

window.onload = function() {
  init();
}