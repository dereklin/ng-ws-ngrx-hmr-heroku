angular.module('gid.shoppingBag')
.controller('FriendController',['$scope', '$compile', function($scope, $compile) {
	$scope.friends = [{
		"name" : "Derek"	
	}, {"name" : "John"}];

	$scope.addVal = function(v) {
		var btn = $compile('<btn val="{{val}}"></btn>')($scope);
		angular.element(document.getElementById('holder')).append(btn);
	}
		
	$scope.callHome = function() {
		alert("called home!");
	}
}]);


