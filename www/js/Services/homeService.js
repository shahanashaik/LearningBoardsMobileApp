angular.module('starter.services')

.service('HomeService', ['ApiProviderService','ConversionService', function(ApiProviderService, ConversionService)  
 {
  	var selectedBoard;
	  var itemsArray;
	this.setSelectedBoard = function(board)
	{
   		selectedBoard = board;
    	console.log(selectedBoard);
  	};

    this.getSelectedBoard = function()
    {
     	return selectedBoard;
  	};

    this.getBoardsDetails = function()
    {
        return ApiProviderService.getServerResponse({method: 'GET', url: ''})
          .success(function(response)
          {
              return response;
          },function(response)
          {
              return response;
          });
    };
}]);

