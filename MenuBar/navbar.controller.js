angular.module('demoApp')
.controller('navbar',function($scope){
  $scope.canDisplay = false;
  $scope.toggleNav = function() {
    $scope.canDisplay = !$scope.canDisplay;
  };
});
