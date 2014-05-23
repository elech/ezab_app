'use-strict';
EZAB_APP.service('Session', ['$rootScope', '$http', '$window', '$q', '$state', function($rootScope, $http, $window, $q, $state){
	this.getToken = function(){
		return $window.sessionStorage.getItem("token");
	};

	this.setToken = function(token){
		$window.sessionStorage.setItem("token", token);
	};

	this.createToken = function(email, password){
		var deferred = $q.defer();
		var that = this;
		$http.post('/tokens', {email: email, password: password}).then(function(res){
			if(res.status === 201){
				that.setToken(res.data.token);
				deferred.resolve(res);
			}else{
				deferred.reject(res);
			}
		});
		return deferred.promise;
	};

	this.logout = function(){
		$state.go('login');
		$window.sessionStorage.removeItem('token');
	};
}])