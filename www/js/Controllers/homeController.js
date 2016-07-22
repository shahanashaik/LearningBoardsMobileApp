angular.module('starter.controllers')

.controller('HomeController', ['$scope','$state','$ionicLoading','HomeService','ConversionService', function($scope, $state, $ionicLoading, HomeService, ConversionService) 
{
	$scope.itemsArray = []; 

	$scope.$on('$ionicView.enter', function()
	{
        $scope.loadBoards();   
  });

	$scope.show = function() 
	{
    	$ionicLoading.show
    	({
      		template: '<p>Loading...</p><ion-spinner icon = "bubbles"></ion-spinner>'
   		});
  	};

  	$scope.hide = function()
  	{
        $ionicLoading.hide();
  	};

  $scope.goToBoardDetail =  function(selectedBoard) 
  {
  		console.log(selectedBoard);
  		HomeService.setSelectedBoard(selectedBoard);
    	$state.go('app.learningBoardDetail');
  };

  $scope.loadBoards = function()
  {
  	  $scope.show();
  	  HomeService.getBoardsDetails().success(function(response)
  	  {
	  	    $scope.itemsArray = ConversionService.convertResponse(response);
  		    $scope.hide();
	     },function(errCode)
  		  {
  			   $scope.showErrorMessage = true;
  		  });
  }

}]);

