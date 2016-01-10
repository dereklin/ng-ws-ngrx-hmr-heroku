angular.module("shoppingBagServiceModule")
.factory("shoppingBagServiceViaResource", ['$resource', '$q', function($resource, $q){

	return {
		getData : function () {
//			var defer = $q.defer();
			
			return $resource("/db");
			
//			r.get()
//			.success(function(res){
//				defer.resolve(res);
//			})
//			.error(function(err, status) {
//				defer.reject(err);
//			});
//			return defer.promise;
		}
	}

}]);

