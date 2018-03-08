angular.module('root', ['ngSanitize'])
    .controller("index", ["$scope", "$http", function ($scope, $http) {
        $scope.title = "Periodic Table";
        
        $scope.details = false;
        
        $scope.showDetails = function(element) {
            console.log(element);
            $scope.element = element;
            console.log(elements[element]);
            var parts = elements[element].split('~');
            $scope.atomicNumber=parts[0];
            $scope.group=parts[1];
            $scope.period=parts[2];
            $scope.elementCategory=parts[3];
            $scope.block=parts[4];
            $scope.eConfig=parts[5];
            $scope.eShell=parts[6];
            $scope.details = true;
            console.log('calling http');
            $http({
                method: 'GET',
                url: 'http://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&prop=text&page='+element
            }).then(function successCallback(response) {
                // console.log('Success: ' + JSON.stringify(response));
                console.log('Success');
                $scope.dynamicContent = response.data.parse.text['*'];
            }, function errorCallback(response) {
                // console.log('Error: ' + JSON.stringify(response));
                console.log('Error');
                $scope.dynamicContent = '<div>' + response.error.info; + '</div>';
            });
        };

        $scope.goBack = function() {
            console.log("Back pressed");
            $scope.details = false;
        };

}]);