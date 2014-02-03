'use strict';

/* App Module */

var wineApp = angular.module('wineApp', [
  'ngRoute',
  'wineControllers',
  'wineFilters',
  'wineServices'
]);
	
wineApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      
      
      when('/wines/add', {
          templateUrl: 'tpl/WineView.html',
          controller: 'WineAddCtrl'
        }).
      when('/wines/:wineId', {
            templateUrl: 'tpl/WineView.html',
            controller: 'WineDetailCtrl'
      }).
      when('/wines/page/:page', {
            templateUrl: 'tpl/WineListView.html',
            controller: 'WineListCtrl'
          }).
      when('/wines', {
          templateUrl: 'tpl/WineListView.html',
          controller: 'WineListCtrl'
        }).
      when('/about', {
          templateUrl: 'tpl/AboutView.html',
          controller: 'AboutCtrl'
        }).
      otherwise({
        //redirectTo: '/phones'
    	  templateUrl: 'tpl/HomeView.html',
          controller: 'HomeCtrl'
      });
  }]);
