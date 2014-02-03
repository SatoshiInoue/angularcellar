'use strict';

/* Directives */

angular.module('wineDirectives', [])

.directive('paginator', function() {
	  return {	
		  template: 'Name: {{name}}'
	  };
});
