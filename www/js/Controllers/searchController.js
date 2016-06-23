angular.module('starter.controllers')

.controller('SearchController', function($scope, $state) {
  $scope.goBack =  function() {
    $state.go('app.home');
  };
});