angular.module('starter.controllers', [
        'starter.service',
        'recommend.controller',
        'regard.controller',
        'account.controller',
        'event.controller'
    ])
    .controller('startCtrl', [
        '$scope',
        '$ionicHistory',
        function($scope, $ionicHistory) {
            $scope.myGoBack = function() {
                $ionicHistory.goBack();
            };
        }
    ]);
