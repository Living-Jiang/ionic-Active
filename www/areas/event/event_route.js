angular.module('event.route', [

    ])
    .config([
            '$stateProvider',
            '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('event', {
                            url: '/event/:id',
                            templateUrl: './areas/event/event.html',
                            controller: 'eventController'
                        })
        }

    ]);
