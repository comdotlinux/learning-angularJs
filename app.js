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
       $scope.messageClass = "alert alert-warning"
       if($scope.name.length < $scope.allowedCharacters ){
        $scope.messageClass = "alert alert-success";    
       }
       
    }
    
    $log.info("Name is " + $scope.name);
}]);



