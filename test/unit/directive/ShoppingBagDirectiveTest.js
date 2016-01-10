describe("shopping bag directives", function() {
	var element, scope;

	beforeEach(function() {
		module('shoppingBagDirective');
		module('gid.shoppingBag');
	});

	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();

		element = '<div product-card />';

		element = $compile(element)(scope);

		scope.$digest();
	}));

	describe("product card", function() {
		it("should say something", function() {
			expect(element.text()).toBe('Hello Product Card');
		});
	});
});