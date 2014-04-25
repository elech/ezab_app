EZAB_APP.controller('sessionHeaderCtrl', ['$scope', 'Session', '$state', function($scope, Session, $state){
	$scope.logout = function(){
		Session.logout().then(function(){
			$state.go('login');
		})
	}
}]);