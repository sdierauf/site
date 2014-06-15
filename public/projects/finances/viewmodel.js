/*
(function() {
  
  var app = angular.module('FinancesApp', []);
  
  app.controller('FinancesBodyController', function($scope) {
    
    $scope.success = true;
    
    $scope.toggleSuccess = function() {
      $scope.success = !$scope.success;
      testAjax();
      
    }
    
  });
  
  function testAjax() {
    var ajax = new XMLHttpRequest();
    ajax.onload = testOnload;
    ajax.open("GET", "http://students.washington.edu/sdierauf/test.php", true);
    ajax.send();
  }
  
  function testOnload() {
    alert("something happened!");
    console.log(this.responseText);
  }
  
  
})();
*/

(function() {
  
  window.onload = function() {
    document.getElementById("signin-submit").onclick = signin;  
  }
  
  function signin() {
    var url = "http://students.washington.edu/sdierauf/test.php";
    var username = document.getElementById("username").value;
    var pass = document.getElementById("user-pass").value;
    var ajax = new XMLHttpRequest();
    ajax.onload = handleSignin;
    var params = "username=" + username + "&pass=" + pass;
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send(params);
  }
  
  function handleSignin() {
    alert(this.responseText);
  }
  
  
  
})();
