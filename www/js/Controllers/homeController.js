angular.module('starter.controllers')

.controller('HomeController', ['$scope','$state','HomeService', function($scope, $state, HomeService) {
  $scope.goToBoardDetail =  function(selectedBoard) {
  	console.log(selectedBoard);
  	HomeService.setSelectedBoard(selectedBoard);
    $state.go('app.learningBoardDetail');
  };
   
}]);

