'use strict';
/* App Module */

var saffModuleApp = angular.module('saffModuleApp', [
  //'ngRoute',
  'ngAnimate',
  'ui.router', 
  'saffModuleControllers',
  'saffModuleServices',
  'cgBusy'
]);


saffModuleApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state       = $state;
    $rootScope.$stateParams = $stateParams;
}])

saffModuleApp.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider){

  $urlRouterProvider
  .otherwise('/default')
 

  $stateProvider
    .state('default', {
        url: '/default',
        controller:'DefaultLayoutCtrl',
        templateUrl:'st_layout_default.html'
    })
    .state('default.details', {
        url: '/default.details/:sampleId',
        controller:'DefaultDetailsCtrl',
        templateUrl:'st_message_details.html'
    })

    .state('alternate', {
        url: '/alternate',
        controller:'AlternateLayoutCtrl',
        templateUrl:'st_layout_alternate.html'
    })

}])