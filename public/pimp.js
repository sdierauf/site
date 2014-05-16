"use strict";

window.onload = function() {
  var mahbox = document.getElementById("mahbox");
  var button = document.getElementById("pimpin");
  var bling = document.getElementById("bling");
  
  button.onclick = fuckYeah;
}

function fuckYeah() {
  mahbox.style.fontSize = "4em";
  console.log("yeah...");
}