// 总路由module
angular.module('appRoute', [
        'recommend.route',
        'regard.route',
        'account.route',
        'event.route'
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
            // setup an abstract state for the tabs directive
                .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            });

            $urlRouterProvider.otherwise('/tab/recommend');

        }
    ]);
