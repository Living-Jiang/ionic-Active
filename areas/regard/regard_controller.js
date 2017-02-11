angular.module('regard.controller', ['regard.service'])

.controller('regardController', [
    '$scope',
    'regardService',
    '$location',
    '$ionicPopup',
    function($scope, regardService, $location, $ionicPopup) {
        $scope.isHasRegard = false;
        $scope.location = $location;
        $scope.render = function() {
            var regard = regardService.getRegard();
            if (regard.length > 0) {
                $scope.regard = regard;
                $scope.isHasRegard = true;
            }else {
            	$scope.isHasRegard = false;
            }
        }
        $scope.$watch('location.url()', function(now, old) {
            $scope.render();
        });

        // 一个确认对话框
        $scope.showConfirm = function(k) {
            var confirmPopup = $ionicPopup.confirm({
                title: '取消关注',
                template: '您确定要取消关注这个活动吗?'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    var LivingRegard = localStorage.getItem('LivingRegard');
                    LivingRegard = JSON.parse(LivingRegard);
                    for (var i = 0; i < LivingRegard.length; i++) {
                        if ($scope.regard[k].id == LivingRegard[i].id) {
                            // 取消关注
                            LivingRegard.splice(i, 1);
                            var data = JSON.stringify(LivingRegard);
							localStorage.setItem('LivingRegard',data);
                            $scope.render();
         					break;
                        }
                    }
                }
            });
        };
    }
]);
