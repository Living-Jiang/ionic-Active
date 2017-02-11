
angular.module('event.controller', ['event.service','ngSanitize'])

.controller('eventController', [
	'$scope',
	'eventService',
	'$sce',
	function($scope,eventService,$sce) {
		$scope.detail = {};
		var LivingRegard = localStorage.getItem('LivingRegard');
			LivingRegard = JSON.parse(LivingRegard);
				if(!LivingRegard) {
					LivingRegard = [];
				}
		eventService.getDetail(null,function(result) {
			$scope.detail = result;
			// $scope.detail.content = $sce.trustAsHtml(eventService.html(result.content));
			$scope.detail.content = eventService.html(result.content);
			// 判断是否关注
				$scope.read = "关注活动";
				//是否关注
				for(var i = 0; i < LivingRegard.length; i++) {
					if($scope.detail.id==LivingRegard[i].id) {
						$scope.read = "取消关注";
					}
				}
			$scope.$apply();
			eventService.removeObject();
		});
			
		$scope.saveFlag = function() {
			var regard = {
				"id" : $scope.detail.id,
				"title" : $scope.detail.title,
				"fee_str":$scope.detail.fee_str,
				"address":$scope.detail.address,
				"image":$scope.detail.image,
				"category_name":$scope.detail.category_name,
				"flag":true
			};
			var flag = true;
				for(var i = 0; i < LivingRegard.length; i++) {
					if(regard.id==LivingRegard[i].id) {
						// 取消关注
						LivingRegard.splice(i,1);
						flag = false;
						$scope.read = "关注活动";
					}
				}
				if(flag) {
					//加入关注
					LivingRegard.push(regard);
					$scope.read = "取消关注";
				}
				var data = JSON.stringify(LivingRegard);
				localStorage.setItem('LivingRegard',data);
		}
	}
]);