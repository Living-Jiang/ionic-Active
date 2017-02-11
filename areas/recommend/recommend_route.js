angular.module('recommend.route', [

    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('tab.recommend', {
                    url: '/recommend',
                    views: {
                        'tab-recommend': {
                            templateUrl: './areas/recommend/recommend.html',
                            controller: 'recommendController'
                        }
                    }
                })

        }
    ]);
