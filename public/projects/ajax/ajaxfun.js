"use strict";

(function() {
  var MY_USER_NAME = "sdierauf";
  var GIT_API = "https://api.github.com";
  
  window.onload = function() {
    ajaxify(GIT_API + "/users/" + MY_USER_NAME + "/followers", handleFollowers);
  }
  
  function ajaxify(query, funcName) {
    var ajax = new XMLHttpRequest();
    ajax.onload = funcName;
    ajax.open("GET", query, true);
    ajax.send();
  }
  
  function handleFollowers() {
    var res = JSON.parse(this.responseText);
    var myFollowers = getFollowers(res);
    show(myFollowers);
    getPublicEvents(myFollowers);
    //alert(res.length);
  }
  
  function getFollowers(json) {
    var followers = [];
    for (var i = 0; i < json.length; i++) {
      if (json[i]["login"]) {
        followers.push(json[i]["login"]);
      }
    }
    return followers;
  }
  
  function show(string) {
    document.getElementById("github").innerHTML = "<pre>" + string + "</pre>";
  }
  
  function getPublicEvents(arr) {
    if (typeof arr = Array) {
      for (var i = 0; i < arr.length; i++) {
        ajaxify(GIT_API + "/users/" + arr[i] + "/events", handlePublicEvents);
      }
    }
  }
  
  function handlePublicEvents() {
    var res = JSON.parse(this.responseText);
    
  }
  
  /*
function handleGithubStuff() {
    var res = JSON.parse(this.responseText);
    //alert(res.length);
    var resultsDiv = document.getElementById("github");
    for (var i = 0; i < res.length; i++) {
      if (res[i]["type"] == "PushEvent") {
      var gitElem = document.createElement("div");
      gitElem.classList.add("git-res");
      var h = document.createElement("h4");
      h.innerHTML = eventType(res[i]["type"]);
      var to = document.createElement("a");
      to.innerHTML = res[i]["repo"]["name"].replace(MY_USER_NAME + "/", "");
      to.setAttribute("href", "https://www.github.com/" + res[i]["repo"]["name"]);
      var message = undefined;
      if (h.innerHTML == "Push") {
        message = document.createElement("p");
        message.innerHTML = res[i]["payload"]["commits"][0]["message"];
      }
      gitElem.appendChild(h);
      gitElem.appendChild(to);
      if (message) {
        gitElem.appendChild(message);
      }
      resultsDiv.appendChild(gitElem);
      }
    }
  }
  
  function eventType(string) {
    if (string == "PushEvent") {
      return "Push";
    } else {
      return string;
    }
  }
*/
  
})();