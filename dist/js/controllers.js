'use strict';

/* Controllers */
var saffModuleControllers = angular.module('saffModuleControllers', []);


/* Custome Layout page */

saffModuleControllers.controller('DefaultLayoutCtrl', ['$scope','Samples',
  function($scope, Samples) {
  $scope.samples = Samples.query();

  //
}]);
 
 /* Edit Item for List page */
saffModuleControllers.controller('DefaultDetailsCtrl',['$scope', '$location', '$stateParams', 'Samples',
  function($scope, $location, $stateParams, Samples) {
    
    $scope.sample = Samples.get({sampleId: $stateParams.sampleId},function(sample){
       $scope.destroy = function() {
          $scope.sample.$remove();
          $location.path('/');
        };
     
        $scope.save = function() {
          $scope.sample.$update(function(){
            console.log('save');
          });
          $location.path('/');
        };
    })
}]);


saffModuleControllers.controller('AlternateLayoutCtrl', ['$scope','Samples',
  function($scope, Samples) {
  $scope.samples = Samples.query();

  //
}]);
