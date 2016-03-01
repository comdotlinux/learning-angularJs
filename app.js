// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    $scope.name = "James";
    $scope.handle = 'Guru';
    $scope.allowedCharacters = 10;
    
    $log.info("Name is " + $scope.name);
}]);



