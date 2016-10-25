var myApp = angular.module('todoApp', []);

myApp.controller('MyCtrl', function($scope) {
    $scope.setFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.theFile = element.files[0];
            console.log("valor de element "+element.value);
        });
    };
});