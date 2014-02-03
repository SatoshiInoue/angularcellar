'use strict';

/* Services */


var wineServices = angular.module('wineServices', ['ngResource']);

wineServices.factory('Wine', ['$resource',
  function($resource){
    return $resource('wines/:wineId', {}, {
    	update: { method:'PUT' },
      query: {method:'GET', params:{/*wineId:'wine'*/}, isArray:true}
    });
}]);

wineServices.factory('SharedValue', function() {
  return {
    title: '',
    paginator: {
    	page: 1,
    	pageTotal: 1
    }
  };
});