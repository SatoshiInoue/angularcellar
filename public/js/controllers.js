'use strict';

/* Controllers */

var wineControllers = angular.module('wineControllers', []);

wineControllers.controller('MainCtrl', ['$scope', 'SharedValue',
function($scope, SharedValue) {
   	$scope.SharedValue = SharedValue;
}]);

wineControllers.controller('WineListCtrl', ['$scope', '$routeParams', 'Wine', 'SharedValue',
	 function($scope, $routeParams, Wine, SharedValue) {
		if (typeof $routeParams.page == 'undefined')
			$scope.page = 1;
		else
			$scope.page = $routeParams.page;
		$scope.range = 8;
		
		//Initialize the pageTotal
		$scope.pageTotal = 1;
		
		//Retrieve Data
		$scope.wines = Wine.query(function(data) {
			console.log("QUERY SUCCESS");
		   //Paginate
		   $scope.pageTotal = Math.ceil(data.length / 8);
		});
		SharedValue.title = "Wine List";
		var wines = new WinesModel();
		console.log('fetched?'+wines.isFetched);
}]).directive('paginator', function() {
	return {
		//transclude: true,
		templateUrl: 'tpl/PaginatorView.html',
		link: function (scope, element, attrs) {
			scope.$watch('pageTotal', function (newval, oldval) {
                if (newval) {
                    console.log(newval);
                    console.log(oldval);
                }
            });
        }
	};
});
	
wineControllers.controller('WineDetailCtrl', ['$scope', '$routeParams', 'Wine', 'SharedValue',
	function($scope, $routeParams, Wine, SharedValue) {
		$scope.wine = Wine.get({wineId: $routeParams.wineId}, function(wine) {
			//SUCCESS:
		});
		console.log($scope.wine);
		$scope.save = function(wine) {
			console.log("save button clicked");
			console.log(wine);
			if (validateWine(wine))
				Wine.update({wineId: wine._id}, wine);
		}
		$scope.delete = function(wine) {
			console.log("delete button clicked");
			console.log(wine);
			//Wine.delete({wineId: wine._id}, wine);
			wine.$delete({wineId: wine._id});
		}
		SharedValue.title = "Wine Detail";
}]);

wineControllers.controller('WineAddCtrl', ['$scope', '$routeParams', 'Wine', 'SharedValue',
	function($scope, $routeParams, Wine, SharedValue) {
		$scope.wine = new Wine({});
		//Wine.get({wineId: $routeParams.wineId}, function(wine) {
			//SUCCESS:
		//});

		SharedValue.title = "Add Wine";
		
		$scope.save = function(wine) {
			console.log("save button clicked");
			console.log(wine);
			if (validateWine(wine))
				wine.$save();
		}
	}
]);

function validateWine(wine) {
	console.log('validateWine');
	var errorMsg = '';
	if (typeof wine.name == 'undefined' || wine.name == '') {
		errorMsg += "Name\n";
	}
	if (!errorMsg == '') {
		alert("Please fill\n"+ errorMsg);
		return false;
	} else
		return true;
}

wineControllers.controller('HomeCtrl', ['$scope', 'SharedValue',
 function($scope, SharedValue) {
	SharedValue.title = "Home";
}]);

wineControllers.controller('AboutCtrl', ['$scope', 'SharedValue',
 function($scope, SharedValue) {
	SharedValue.title = "About";
}]);
