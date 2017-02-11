angular.module('recommend.controller', ['recommend.service'])

.controller('recommendController', [
    '$scope',
    'recommendService',
    '$ionicLoading',
    function($scope, recommendService, $ionicLoading) {
        // future, week, weekend, today, tomorrow
        $scope.times = [
            { name: '今天', id: 'today' },
            { name: '明天', id: 'tomorrow' },
            { name: '未来', id: 'future' },
            { name: '本周', id: 'week' },
            { name: '周末', id: 'weekend' }
        ];
        $scope.pertime = $scope.times[0].id;
        $scope.events = [];
        $scope.isFirst = false;
        $scope.location = [];
        $scope.locationID = "108288";
        $scope.types = [
            { name: '音乐', id: 'music' },
            { name: '戏剧', id: 'drama' },
            { name: '展览', id: 'exhibition' },
            { name: '讲座', id: 'salon' },
            { name: '聚会', id: 'party' },
            { name: '运动', id: 'sports' },
            { name: '旅行', id: 'travel' },
            { name: '公益', id: 'commonweal' },
            { name: '电影', id: 'film' }
        ];
        $scope.type = $scope.types[0].id;
        var data = {
            loc: $scope.locationID,
            day_type: $scope.pertime,
            type: $scope.type
        };
        $scope.locationChange = function() {
            $scope.show();
            data.loc = this.locationID;
            recommendService.getList(data, function(result) {
                $scope.events = result.events;
                $scope.$apply();
                $scope.hide();
            });
        }
        $scope.typeChange = function() {
            $scope.show();
            data.type = this.type;
            recommendService.getList(data, function(result) {
                $scope.events = result.events;
                $scope.$apply();
                $scope.hide();
            });
        }
        $scope.timeChange = function() {
                $scope.show();
                data.day_type = this.pertime;
                recommendService.getList(data, function(result) {
                    $scope.events = result.events;
                    $scope.$apply();
                    $scope.hide();
                });
            }
            // 加载动画
        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $scope.hide = function() {
            $ionicLoading.hide();
        };
        // 初始化城市的列表
        recommendService.getLocation(null, function(result) {
            $scope.location = result.locs;
            $scope.$apply();
        });
        // 初始化数据列表
        $scope.show();
        recommendService.getList(data, function(result) {
            $scope.events = result.events;
            $scope.$apply();
            $scope.hide();
            $scope.isFirst = true;
        });
    }
]);
