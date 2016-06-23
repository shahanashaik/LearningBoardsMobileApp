angular.module('starter.controllers')

.controller('BrowseController', function($scope, $state) {
  $scope.goToDetail =  function() {
    $state.go('app.browseDetail');
  };
});