angular.module('dStory')
.controller('mainController', ['$scope',
function($scope) {
  $scope.getName = function() {
    return 'John Doe';
  };
}]);
