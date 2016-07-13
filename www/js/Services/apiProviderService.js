angular.module('starter.services',[])

.factory('ApiProviderService', function($http) {

    var obj = {};
    var baseUrl = "http://lbdemo.accenture.com/boards.php/";
    var APITimeout = 200000;
    obj.getServerResponse = function(options)
    {
        return $http({
                        method: options.method,
                        url: baseUrl+options.url,
                        transformResponse: function(cnv) 
                        { 
                            var x2js = new X2JS(); 
                            var aftCnv = x2js.xml_str2json(cnv); 
                            console.log(aftCnv);
                            return aftCnv; 
                        } 
                    });             
    }
    return obj;
});

