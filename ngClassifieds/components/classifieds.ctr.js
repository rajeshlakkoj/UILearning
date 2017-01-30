    // iife 
    (function(){

      "use strict";

       // Refernce to our module present in app.js

       angular
       .module("ngClassifieds")
       .controller("classifiedsCtrl", function($scope) {

          $scope.message = "Hi there";
          $scope.name = {
          	first: "Rajesh",
 			last: "Lakkoj"
 		  };	
         
       });
    })();