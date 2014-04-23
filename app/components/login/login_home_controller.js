EZAB_APP.controller('loginHomeCtrl', ['$scope', 'Session', '$state', function($scope, Session, $state){
	$scope.login = function(form){
		Session.createToken(form.username, form.password).then(function(res){
			$state.go('dash');
		}, function(err){
			//err
		})
	};
}]);