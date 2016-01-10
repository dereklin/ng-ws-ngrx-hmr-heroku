angular.module("shoppingBagDirective")
.directive("phone", function() {
	return {
		restrict: 'EA',
		scope: {
			dial: "&"
		},
		template: '<div class="button" ng-click="dial()">Call Home!</div>'
	}
})

;