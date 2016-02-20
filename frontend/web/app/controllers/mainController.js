angular.module('chemGeno')
.controller('displayController', ['$scope',
function($scope) {
  $scope.getName = function() {
    return 'John Doe';
  };
  
}]);
