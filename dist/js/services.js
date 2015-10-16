'use strict';

/* Services */

var saffModuleServices = angular.module('saffModuleServices', ['ngResource']);

saffModuleServices.factory('Samples', ['$resource',
  function($resource){
    return $resource(':sampleId.json', {}, {
      query:  {method: 'GET',   params:{sampleId:'samples'}, isArray:true} // this retrieves the samples.json
    });
  }]);