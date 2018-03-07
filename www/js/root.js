angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.title = "Periodic Table";
        
        $scope.details = false;

        $scope.toggleLanth = 
        $scope.toggleActi
        
        $scope.showDetails = function(element) {
            console.log(element);
            $scope.element = element;
            $scope.details = true;
        };

        $scope.goBack = function() {
            console.log("Back pressed");
            $scope.details = false;
        };

}]);