EZAB_APP.controller('sessionHeaderCtrl', ['$scope', 'Session', '$state', function($scope, Session, $state){
	$scope.logout = Session.logout;
}]);