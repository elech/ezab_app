EZAB_APP.controller('loginHomeCtrl', ['$scope', 'Session', function($scope, Session){
	$scope.login = function(form){
		console.log(form);
		Session.createToken(form.username)
	};
}]);