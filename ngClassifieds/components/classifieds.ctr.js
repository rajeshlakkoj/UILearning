    // iife 
    (function(){

      "use strict";

       // Refernce to our module present in app.js

       angular
       .module("ngClassifieds")
       .controller("classifiedsCtrl", function($scope, $http , classifiedfactory, $mdSidenav, $mdToast, $mdDialog) {


             $scope.colour = {

                "background-color": "white"

             };

          

             $scope.openSidebar = function(){


                $mdSidenav('left').open();

 

             }

            $scope.closeSidebar = function(){


                $mdSidenav('left').close();
                $scope.classified = {};
 

             }

             $scope.saveClassified = function(classified){
              
              if(classified) {
               $scope.classifieds.push(classified);
               $scope.classified = {};
               $scope.closeSidebar();
               showToast("Classified Saved");
              }
             }

            $scope.editClassified = function(classified){
              $scope.editing = true;
              $scope.openSidebar();
              $scope.classified = classified;
            }

            $scope.deleteClassified = function(event,classified){

                $mdDialog.show( 
                $mdDialog.confirm()
                  .title("You are going to delete an classified Are you sure? ")
                  .textContent("You are going to delete an classified Proceed anyway")
                  .targetEvent(event)
                  .ok("Yes Please do it")
                  .theme()
                  .cancel("No Please")


                ).then(function(){
                   var index = $scope.classifieds.indexOf(classified);
               $scope.classifieds.splice(index,1);
                },function() {


                });

              
            }


            $scope.saveEdit = function(){
              $scope.editing = false;
              $scope.classified = {};
              $scope.closeSidebar();
              showToast("Edit was Saved");
            }


           
            function showToast(message){
              $mdToast.show(

                  $mdToast.simple()
                  .content(message)
                  .position('top','right')
                  .hideDelay(3000)
                );
            }
         


      classifiedfactory.getClassifieds().then(function(classifieddata){

         $scope.classifieds = classifieddata.data;
         console.log(classifieddata);

      });

       });
    })();