
angular.module('regard.service', [])

.factory('regardService', function() {
  return {
    getRegard:function() {
    	var regard = localStorage.getItem('LivingRegard');
    	regard = JSON.parse(regard);
    	return regard;
    }
  };
});