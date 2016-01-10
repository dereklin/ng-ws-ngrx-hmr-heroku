angular.module("shoppingBagDirective")
.directive("btn", function() {
	return {
		restrict: 'EA',
		controller: function($scope) {
			console.log($scope.val);
		},
		scope: {
			val: "@",
		},
		link: function(scope, element, attrs) {
			element.on("click", function(){
				console.log(attrs.val);
			});
		},
		transclude: true,
		template: "<button>{{val}}</button>"
	}
})

;