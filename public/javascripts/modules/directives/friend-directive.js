angular.module("shoppingBagDirective")
.directive("FriendDirective", function() {
	return {
		template: "Hello Product Card",
		transclude: false
	}
})

;