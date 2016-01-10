// define the main module, no external dependencies - DI 
angular.module('gid.shoppingBag', ["shoppingBagDirective", "shoppingBagServiceModule", "ngResource"]);


// syntax to accsess module - minor difference from the syntax of defining a module (dependency is defined in th definition, not in the access)
// shoppingBagModule = angular.module('gid.shoppingBag');

// module can have one or more components - controllers, services, directives

// define a controller component

angular.module('gid.shoppingBag')
.controller('ShoppingBagController', ['$scope', 'shoppingBagService', 
                                      'shoppingBagServiceViaResource',
                                      'shoppingBagServiceSimple',
                                      function($scope, shoppingBagService, 
                                    		  shoppingBagServiceViaResource,
                                    		  shoppingBagServiceSimple) {
	$scope.activeItems = [{productName: "Blue Jean"}];
	
	shoppingBagService.getData().then(function(res) {
		$scope.db = res;
		
		console.log("logging db:", $scope.db);
	}
	, function(err) {
		
	});
	
	shoppingBagServiceViaResource.getData().query(function(data) {
		console.log("logging resource", data[0]);
	});
	
	
	

	
	
	
}]).controller('DirectiveController',['$scope', function($scope) {
	$scope.name = 'Max Karl Ernst Ludwig Planck (April 23, 1858 Ð October 4, 1947)';
}]);


// the syntax may look complex - here is what goes behind the scene