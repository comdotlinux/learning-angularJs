// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    
    $scope.userHandle = {
        handle: "",
        hideHandleInputField: false,
        handleUpdated: function() {
            $scope.userHandle.hideHandleInputField = true;
        }
    }
    
    $scope.name = "";
    $scope.allowedCharacters = 10;
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



