'use-strict';
EZAB_APP.service('Session', ['$rootScope', '$http', '$window', '$q', function($rootScope, $http, $window, $q){
	this.getToken = function(){
		return $window.sessionStorage.getItem("token");
	};

	this.setToken = function(token){
		$window.sessionStorage.setItem("token", token);
	};

	this.createToken = function(email, password){
		var that = this;
		return $http.post('/tokens', {email: email, password: password}).then(function(res){
			if(res.status === 201){
				that.setToken(res.data.token);
			}
		});
	};

	this.logout = function(){
/*		var deferred = $q.defer();
		$http.delete('/tokens').then(function(res){
			if(res.status === 200){*/
				$window.sessionStorage.removeItem('token');
/*				deferred.resolve(res);
			}else{
				deferred.reject(res);
			}
		})
		return deferred.promise;*/
	};
}])