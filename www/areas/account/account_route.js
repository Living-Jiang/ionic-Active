angular.module('account.route', [

    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('tab.account', {
                    url: '/account',
                    views: {
                        'tab-account': {
                            templateUrl: './areas/account/account.html',
                            controller: 'accountController'
                        }
                    }
                })

        }
    ]);
