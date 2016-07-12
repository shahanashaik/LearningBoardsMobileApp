angular.module('starter.services')

.service('HomeService', function() {
  var selectedBoard;

  this.setSelectedBoard = function(board){
    selectedBoard = board;
    console.log(selectedBoard);
  };

  this.getSelectedBoard = function(){
      return selectedBoard;
  };


});

