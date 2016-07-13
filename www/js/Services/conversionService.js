angular.module('starter.services')

.service('ConversionService', function() {
  var convertedResponse;

  this.convertResponse = function(rawResponse){
    var XMLData = rawResponse;
    convertedResponse = XMLData.rss.channel.item;
    return convertedResponse;
  };


});

