angular.module('starter.controllers')

.controller('xmlController', function($scope, $http, $ionicLoading) 
{ 
  $scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-spinner icon = "bubbles"></ion-spinner>'
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };

    $scope.show($ionicLoading);  
    $http.get('http://lbdemo.accenture.com/boards.php', 
    { 
        transformResponse: function(cnv) 
        { 
            var x2js = new X2JS(); 
            var aftCnv = x2js.xml_str2json(cnv); 
            return aftCnv; 
        } 
    }).success(function(response) 
    { 
      $scope.XMLData = response;
      $scope.itemsArray = $scope.XMLData.rss.channel.item;
        console.log(response);
         $scope.hide($ionicLoading); 
    });

});

