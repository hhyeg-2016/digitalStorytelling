angular.module('dStory')
.controller('mainController', ['$scope',
function($scope) {
  $scope.getName = function() {
    console.log('called')
    return 'John Doe';
  };

}]);
