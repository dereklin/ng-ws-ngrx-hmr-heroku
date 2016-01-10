angular.module("shoppingBagDirective", [])
.directive("productCard", function() {
	return {
		template: "Hello Product Card",
		transclude: false
	}
})

;