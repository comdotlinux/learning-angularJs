// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    $scope.name = "";
    $scope.handle = "";
    $scope.allowedCharacters = 10;
    
    $scope.hideHandleInputField = false;
    
    $scope.handleUpdated = function(){
        $scope.hideHandleInputField = true;
    }
    
    $scope.handleNameUpdated = function(){
    
        if($scope.name.length < $scope.allowedCharacters){
            $scope.nameInvalid = "alert alert-warning";     
        } else {
            $scope.nameValid = "alert alert-success";
        }       
    }
    
    $log.info("Name is " + $scope.name);
}]);



