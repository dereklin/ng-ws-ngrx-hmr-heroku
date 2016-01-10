angular.module("shoppingBagServiceModule", [])
.factory("shoppingBagService", ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {

	/*
	var shoppingBagService = this;
	
	
	
	shoppingBagService.getData = function () {
			var defer = $q.defer();
			
			$http.get("/db")
			.success(function(res){
				defer.resolve(res);
			})
			.error(function(err, status) {
				defer.reject(err);
			});
			
			return defer.promise;
		}
			
	
	
	return shoppingBagService;
	
	*/
	
	return {
		getData : function () {
			var defer = $q.defer();
			$http.get("/db")
			.success(function(res){
				defer.resolve(res);
			})
			.error(function(err, status) {
				defer.reject(err);
			});
			return defer.promise;
		}
	}

}])

.factory("shoppingBagServiceSimple", ['$http', '$q', '$rootScope', function($http, $q, $rootScope) {
	return {
		getData : function () {
			return $http.get("/db");
		}
	}

}])
;