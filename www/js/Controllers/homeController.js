angular.module('starter.controllers')

.controller('HomeController', function($scope, $state) {
  $scope.goToBoardDetail =  function(stateName) {
    $state.go(stateName);
  };
   
});
