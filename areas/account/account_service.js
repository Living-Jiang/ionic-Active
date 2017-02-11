
angular.module('account.service', [])

.factory('accountService', function() {
  return {
    say:function() {
    	console.log('account');
    }
  };
});