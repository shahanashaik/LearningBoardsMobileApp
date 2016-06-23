angular.module('starter.controllers')

.controller('BoardDetailController', function($scope, $state) {
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
  
});