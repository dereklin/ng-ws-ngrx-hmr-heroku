angular.module("shoppingBagDirective")
.directive("zipCodeValidator", function() {
	return {
		restrict: 'EA',
		require: 'ngModel',
		link: function(scope, element, attrs, ctrl) {
			
			element.on("click", function() {
				console.log("clicked");
			});
			
			ctrl.$parsers.push(function(value) {
				var regex = /\d{5}/;
				var success = regex.test(value);
				ctrl.$setValidity('zip', success);
				return value;
			});
		}
	}
});