angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

$scope.goToSearch = function () {
          $state.go('app.search');
  };
 $ionicModal.fromTemplateUrl('modal-template.html', {
      scope: $scope,
      animation: 'slide-in-up'
   }).then(function(modal) {
     $scope.modal = modal;
   });
   $scope.openModal = function() {
      $scope.modal.show();
   };
 
   $scope.closeModal = function() {
      $scope.modal.hide();
   };

  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };
  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('HomeCtrl', function($scope, $state,$ionicModal,$timeout) {
  $scope.goToBoardDetail =  function(stateName) {
    $state.go(stateName);
  };
   $ionicModal.fromTemplateUrl('modal-template.html', {
      scope: $scope,
      animation: 'slide-in-up'
   }).then(function(modal) {
     $scope.modal = modal;
   });
   $scope.openModal = function() {
      $scope.modal.show();
   };
 
   $scope.closeModal = function() {
      $scope.modal.hide();
   };
   $timeout($scope.openModal, 0);
})

.controller('BrowseCtrl', function($scope, $state) {
  $scope.goToDetail =  function() {
    $state.go('app.browseDetail');
  };
})

.controller('SearchCtrl', function($scope, $state) {
  $scope.goBack =  function() {
    $state.go('app.home');
  };
})

.controller('BoardDetailCtrl', function($scope, $state) {
  $scope.goBack =  function() {
    $state.go('app.home');
  };
  $scope.start = function(){
    $scope.buttonStyle="button-calm";
  };
  $scope.openInExternalBrowser = function()
  {
    // Open in external browser
    window.open('http://google.com','_system','location=no'); 
  };
 
  $scope.openInAppBrowser = function()
  {
    // Open in app browser
    window.open('http://google.com','_blank'); 
  };
  $scope.openCordovaWebView = function()
  {
  // Open cordova webview if the url is in the whitelist otherwise opens in app browser
    window.open('http://google.com','_self'); 
  };
  
})

.controller('xmlController', function($scope, $http) 
{ 
    $http.get("//lbdemo.accenture.com/boards.php", 
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
        //console.log($scope.itemsArray);
    }); 
})

.controller('BrowseDetailCtrl', function($scope, $state){
  $scope.items = [
                    {
                      id: "1", name:"Accenture Requirements Analyzer(ARA)"
                    },
                    {
                      id: "2",name:"Accenture Research"
                    },
                    {
                      id: "3",name:"Accenture Technology"
                    },
                    {
                      id: "4",name:"Big Data"
                    },
                    {
                      id: "5", name:"BPO Mobilization"
                    },
                    {
                      id: "6",name:"Business Analysis"
                    },
                    {
                      id: "7",name:"Capability Development"
                    },
                    {
                      id: "8",name:"Capital Markets"
                    },
                    {
                      id: "9", name: "Digital Supply Network"
                    },
                    {
                      id: "10",name:"Employee Experience"
                    },
                    {
                      id: "11",name:"Energy"
                    },
                    {
                      id: "12",name:"Media and Entertainment"
                    }
                ];
  
  $scope.dividerFunction = function(key){
  return key;
  }
  $scope.addListIds = function(){
    $scope.allocateId = function(){jQuery('.item-divider').each(function(){jQuery(this).attr('id',jQuery(this).html());});}
    if(jQuery('.item-divider').length == 0){
      setTimeout($scope.allocateId,1000);}

    jQuery('ion-content').scroll(function() {
      $scope.position = jQuery(this).scrollTop();
      jQuery('.item-divider').each(function() {
        $scope.target = jQuery(this).offset().top;
        $scope.id = jQuery(this).attr('id');
        $scope.li_text = jQuery(this).html();
        if ($scope.position >= $scope.target) {
         jQuery('#alphaInput input').attr('value',$scope.li_text);  
        }
      });
    });
    }
  $scope.addListIds();
  $scope.alphaSortingFunction = function(){
    //console.log('clicked');
    
    jQuery('#alphaBox').toggle();
    jQuery('#alphaBox ul li').click(function(e){
      var li_text = jQuery(this).html();
      //console.log(li_text);
      jQuery('#alphaInput input').attr('value',li_text);
      //jQuery('.item-divider').each(function(){jQuery(this).attr('id',jQuery(this).html());});
      //console.log(li_text);
      $('ion-view[view-title="Browse"] ion-content').scrollTop($("#"+li_text).offset().top);
      

    });

  }

});

