(function (angular) {
    'use strict';
    angular.module('LearningBoardApp.Controllers')
        .controller('MenuController', ['$scope', '$ionicHistory', '$state', '$rootScope',
             function ($scope, $ionicHistory, $state, $rootScope) {
                $scope.goToSearch = function () {
					$state.go('app.search');
                };
            }]);
}(window.angular));