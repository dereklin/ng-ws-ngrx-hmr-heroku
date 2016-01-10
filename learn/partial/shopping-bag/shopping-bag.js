angular.module('learn').controller('ShoppingBagCtrl',function($scope){

	$scope.products = [
		{name: "Product 1",
			price: "29.99",
			bid: "34"
		},


		{name: "Product 2",
			price: "19.99",
			bid: ""
		}


	];

	$scope.averageBidPrice = 0;

	
	$scope.calculateAverageProductPrice = function() {
		var sum = 0;
		$scope.products.forEach(function(product, index, array) {
			sum = sum + (parseInt(product.bid,10) || 0);
		});
		$scope.averageBidPrice = sum / $scope.products.length;
	};
	
	$scope.calculateAverageProductPrice();

});