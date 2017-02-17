
(function(){
	
   "use strict";

   angular
    .module('ngClassifieds')
    .factory("classifiedfactory",function($http){

     function getClassifieds(){

        return $http.get("components/classified.data.json")
     }

    return {

    getClassifieds: getClassifieds

    }

    });


})();