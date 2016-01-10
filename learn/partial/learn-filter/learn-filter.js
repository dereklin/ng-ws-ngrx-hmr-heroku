angular.module('learn').controller('LearnFilterCtrl',['$http',function($http){
	var vm = this;

	$http.jsonp('http://www.filltext.com/?rows=30&id={index}&fname={firstName}&lname={lastName}&sales={numberRange|100, 2000}&bonus={numberRange|100, 2000}&callback=JSON_CALLBACK')
	.success(function(data) {
		vm.users = data;
	});


}]);