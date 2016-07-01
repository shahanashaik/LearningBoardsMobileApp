angular.module('starter.controllers')

.controller('SearchController', function($scope, $state, $HomeService) {
  $scope.goBack =  function() {
    $state.go('app.home');
  };
});