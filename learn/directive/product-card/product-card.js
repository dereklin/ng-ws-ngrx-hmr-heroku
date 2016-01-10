angular.module('learn').directive('productCard', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			product: '=',
			cal: "&"
		},
		controller: ['$scope', function($scope) {
			this.test = function() {
				console.log($scope.product.name);
			};
		}],
		templateUrl: 'learn/directive/product-card/product-card.html',
		link: function(scope, element, attrs, ctrl) {
			element.on("click", function() {
				ctrl.test();
			});
		}
	};
});
