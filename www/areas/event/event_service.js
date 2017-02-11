angular.module('event.service', [
    'starter.service',
])

.factory('eventService', [
    'appService',
    'GlobalVariable',
    '$stateParams',
    '$document',
    function(appService, GlobalVariable, $stateParams, $document) {
        return {
            getDetail: function(data, callback) {
                var path = GlobalVariable.Detail_path + $stateParams.id;
                appService.get(path, data, callback);
            },
            removeObject: function() {
                var document = $document[0];
                var nodes = document.getElementsByTagName('object');
                while (nodes[0]) {
                    var nodeFather = nodes[0].parentNode;
                    nodeFather.removeChild(nodes[0]);
                    nodes = document.getElementsByTagName('object');
                }
            },
            html:function(html) {
                var document = $document[0];
                var imagesFather = document.getElementById('imagesFather');
                imagesFather.innerHTML = html;
                var images = imagesFather.getElementsByTagName('img');
                var length = images.length;
                var i = 0;
                while (i < length) {
                    images[i].setAttribute('ng-src', images[i].src);
                    images[i].src = '';
                    i++;
                }
                var htmlText = imagesFather.innerHTML;
                imagesFather.innerHTML = '';
                return htmlText;

            }
        };
    }
]);
