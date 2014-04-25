EZAB_APP.controller('loginHomeCtrl', ['$scope', 'Session', '$state', function($scope, Session, $state){
	
	$scope.login = function(form){
		Session.createToken(form.email.$modelValue, form.password.$modelValue).then(function(res){
			$state.go('webprops');
		}, function(err){
			//err
		})
	};
}]);