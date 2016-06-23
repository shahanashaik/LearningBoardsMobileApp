angular.module('starter.controllers')

.controller('BrowseDetailController', function($scope, $state){
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

