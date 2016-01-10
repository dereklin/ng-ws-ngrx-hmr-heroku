angular.module('gid.shoppingBag')
.controller('testCtrl1',['$scope', function($scope) {
	
	/*
	$scope.getNumber = function(num) {
		var number = parseInt(num);
		if (number) {
			return new Array(number);   
		} else {
			return new Array(0);
		}
	}
	*/
	
	$scope.number = "5";
	$scope.getNumber = function(num) {
	    return new Array(parseInt(num));   
	}	
	
}]);


