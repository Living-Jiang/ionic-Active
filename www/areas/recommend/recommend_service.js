angular.module('recommend.service', ['starter.service'])

.factory('recommendService', [
    'GlobalVariable',
    '$http',
    '$window',
    '$document',
    'appService',
    function(GlobalVariable, $http, $window,$document,appService) {
        return {
            getList: function(data,callback) {
                var path = GlobalVariable.DataList_path;
                appService.get(path,data,callback);
            },
            getLocation:function(data,callback) {
              var path = GlobalVariable.Location_path;
              appService.get(path,data,callback);
            }
        }
    }
]);
