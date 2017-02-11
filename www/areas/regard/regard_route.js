angular.module('regard.route', [

    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('tab.regard', {
                    url: '/regard',
                    views: {
                        'tab-regard': {
                            templateUrl: './areas/regard/regard.html',
                            controller: 'regardController'
                        }
                    }
                })

        }
    ]);
