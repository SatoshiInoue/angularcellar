'use strict';

/* Filters */

angular.module('wineFilters', []).
filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}).
filter('range', function() {
	return function(val, range) {
		range = parseInt(range);
	    for (var i=0; i<range; i++)
	    	val.push(i);
	    return val;
	};
}).
//http://stackoverflow.com/questions/14796087/filter-results-6-through-10-of-100-with-ng-repeat-in-angular
filter('slice', function() {
	  return function(arr, start, end) {
		    return arr.slice(start, end);
  };
});

