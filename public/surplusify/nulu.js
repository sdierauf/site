var runButton = document.getElementById("run");
var input = document.getElementById("assetInput");

var deleteHostnames = document.getElementById("delHostnames");
var toBeSurplussed = document.getElementById("tobesurp");

run.onclick = function () {
	var room = document.getElementById("room").value;
	var strArray = input.value.split("\n");
	var result = "nulu kw '" + strArray[0];
	for (var i = 1; i < strArray.length - 1; i++) {
		if(strArray[i].length > 1) {
			result += "|" + strArray[i];
		}
	}
	if (strArray[strArray.length-1].length > 0 && strArray.length > 1) {
		result += "|" + strArray[strArray.length - 1];
	}
	result += "' change r " + room;
	if (deleteHostnames.checked) {
		result += " h delete";
		//document.getElementById("removeHosts").innerHTML = ".  Their hard drives are removed and their hostnames are deleted";
	}
	if (toBeSurplussed.checked) {
		result += " z tobesurp";
	}
	//not sure what nulu command changes building
	document.getElementById("change").innerHTML = result;
	
	copyToClipboard(result);
	document.getElementById("destinationRoom").innerHTML = room;
	var markifier = "";
	for (var j = 0; j < strArray.length; j++) {
		markifier += strArray[j] + "\n";
		console.log(j);
	}
	console.log(markifier);
	document.getElementById("assets").innerHTML += markifier;
	
	
	
}

function copyToClipboard (text) {
  window.prompt ("Copy to clipboard: Ctrl+C, Enter", text);
}

window.onload = function() {
  $('.selectpicker').selectpicker();
}
