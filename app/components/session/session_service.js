'use-strict';
EZAB_APP.service('Session', ['$rootScope', '$http', '$window', '$q', function($rootScope, $http, $window, $q){
	this.getToken = function(){
		return $window.sessionStorage.getItem("token");
	};

	this.setToken = function(token){
		$window.sessionStorage.setItem("token", token);
	};

	this.createToken = function(username, password){
		var that = this;
		var deferred = $q.defer();
		if(!username.$valid || !password.$valid){
			deferred.reject('Username/password not valid');
		}else{
			$http.post('/tokens', {username: username, password: password}).then(function(res){
				if(res.status === 201){
					that.setToken(res.data.token);
					deferred.resolve(res);
				}else{
					deferred.reject(res);
				}
			});
		}
		return deferred.promise;
	};

	this.logout = function(){
		return $http.delete('/tokens').then(function(res){
			if(res.status === 200){
				$window.sessionStorage.removeItem('token');
			}
		})
	};
}])