angular.module("shoppingBagDirective")
.directive("contactCard", function() {
	return {
		restrict: 'EA',
		controller: function($scope) {
			console.log($scope.data);
		},
		scope: {
			data: "=",
			title: "="
		},
		link: function(scope, element, attrs) {
			element.on("click", function(){
				console.log(attrs.id);
				console.log(scope.data);
			});
		},
		transclude: true,
		templateUrl: "templates/directives/contact-card.html"
	}
})

;