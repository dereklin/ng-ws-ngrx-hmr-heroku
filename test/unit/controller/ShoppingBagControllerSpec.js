'use-strict';

describe('Shopping Bag Controller', function() {
	beforeEach(function() {
//		module('shoppingBagDirective');
		module('gid.shoppingBag');
	});

	var $controller;

	beforeEach(inject(function(_$controller_) {
		// The injector unwraps the underscores (_) from around the parameter
		// names when matching
		$controller = _$controller_;
	}));

	describe('active items', function() {
		it('scope has active items',
				function() {
					var $scope = {};
					var controller = $controller('ShoppingBagController', {
						$scope : $scope
					});
					expect($scope.activeItems).toEqual([{"productName":"Blue Jean"}]);
				});
	});

});