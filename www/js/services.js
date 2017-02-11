angular.module('starter.service', [])

.factory('appService', [
    'GlobalVariable',
    '$http',
    '$window',
    '$document',
    function(GlobalVariable, $http, $window,$document) {
        return {
            get: function(path,data,callback) {
                var queryStr = '?';
                for (var k in data) {
                    queryStr += k + '=' + data[k]+'&';
                }
                var fnName = 'json_fn'+(~~($window.Math.random()*10000));
                $window[fnName] = function(data) {
                  callback(data);
                  $document[0].body.removeChild(script);
                }
                var url = path + queryStr + 'callback='+fnName;

                var script = $document[0].createElement('script');
                script.src = url;
                $document[0].body.appendChild(script);
            }
        }
    }
]);
