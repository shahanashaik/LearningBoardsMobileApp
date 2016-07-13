angular.module('starter.controllers')

.controller('xmlController',['$scope','$ionicLoading','ApiProviderService','ConversionService', function($scope, $ionicLoading, ApiProviderService, ConversionService) 
{ 
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-spinner icon = "bubbles"></ion-spinner>'
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };

  $scope.show();
  ApiProviderService.getServerResponse({method: 'GET', url: ''}).
          success(function(response)
          {
            $scope.itemsArray = ConversionService.convertResponse(response);
            $scope.hide();
          },function(response)
          {
              return response;
          });
}]);

