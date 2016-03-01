// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    $scope.name = "";
    $scope.handle = "";
    $scope.allowedCharacters = 10;
    
    $scope.hideHandleInputField = false;
    
    $scope.handleUpdated = function() {
        $scope.hideHandleInputField = true;
    };
    
    $scope.handleNameUpdated = function () {
    
        if ($scope.name.length < $scope.allowedCharacters ) {
            $scope.nameInvalid = "alert alert-warning";     
        } else {
            $scope.nameValid = "alert alert-success";
        }
        
        $scope.progressPercent = (($scope.name.length * 100) / $scope.allowedCharacters);
        if ($scope.progressPercent > 100) {
            $scope.progressPercent = 100;
        }
    };
    
    $log.info("Name is " + $scope.name);
}]);



