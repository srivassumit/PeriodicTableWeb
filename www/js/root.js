angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
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
        };

        $scope.goBack = function() {
            console.log("Back pressed");
            $scope.details = false;
        };

}]);