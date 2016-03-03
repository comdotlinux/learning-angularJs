//var angular = require("./angular");
// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log','$timeout', function($scope, $log, $timeout) {

    $scope.userHandle = {
        handle: "",
        hideHandleInputField: false,
        highlight: "",
        handleUpdated: function() {
            $scope.userHandle.hideHandleInputField = ($scope.userHandle.handle.length > 0);
        }
    };
    
    $timeout(function(){
        $log.info("Timeout occured..... checking user handle")
        $scope.userHandle.highlight = $scope.userHandle.handle.length === 0;
    },10000);

    $scope.nameHandler = {
        name: "",
        allowedCharacters: 10,
        progressPercent: 0,
        nameInvalid: "",
        nameValid: "",
        handleNameUpdated: function() {
            if ($scope.nameHandler.name.length < $scope.nameHandler.allowedCharacters) {
                $scope.nameHandler.nameInvalid = "alert alert-warning";
                $scope.nameHandler.nameValid = "";
            }
            else {
                $scope.nameHandler.nameValid = "alert alert-success";
                $scope.nameHandler.nameInvalid = "";
            }

            $scope.nameHandler.progressPercent = (($scope.nameHandler.name.length * 100) / $scope.nameHandler.allowedCharacters);
            if ($scope.nameHandler.progressPercent > 100) {
                $log.info("name length is greater than or equal to 100");
                $scope.nameHandler.progressPercent = 100;
            }
        }
    };
}]);