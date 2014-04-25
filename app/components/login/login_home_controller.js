EZAB_APP.controller('loginHomeCtrl', ['$scope', 'Session', '$state', 'flash', function($scope, Session, $state, flash){
	
	$scope.login = function(form){
		Session.createToken(form.email.$modelValue, form.password.$modelValue).then(function(res){
			$state.go('webprops');
		}, function(err){
			flash.error = "Invalid email / password";
		})
	};
}]);