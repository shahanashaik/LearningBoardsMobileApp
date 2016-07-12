angular.module('starter.services',[])

.service('ApiProviderService', function($http) {

    this.invokeApi = function(options)
    {
        return $http({
                        method: 'GET',
                        url: 'http://lbdemo.accenture.com/boards.php',
                        transformResponse: function(cnv)
                        {
                            var x2js = new X2JS(); 
                            var aftCnv = x2js.xml_str2json(cnv); 
                            return aftCnv;
                        }
                    });
    }

    console.log('executed');
});