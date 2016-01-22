// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    $scope.name = "James";

    $scope.allowedCharacters = 10;
}]);



