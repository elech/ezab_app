EZAB_APP.controller('loginHomeCtrl', ['$scope', 'Session', '$location', function($scope, Session, $location){
	$scope.login = function(form){
		Session.createToken(form.username, form.password).then(function(res){
			$location.path('/dash');
		}, function(err){
			//err
		})
	};
}]);