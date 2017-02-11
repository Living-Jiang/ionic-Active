
angular.module('account.controller', ['account.service'])

.controller('accountController', [
	'$scope',
	'accountService',
	function($scope,accountService) {
		$scope.name='account'
	}
]);