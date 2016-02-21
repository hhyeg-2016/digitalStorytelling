angular.module('dStory')
.controller('displayController', ['$scope', 'dataService', '$stateParams',
function($scope, dataService,$stateParams) {
  console.log($stateParams.id);
  $scope.index = $stateParams.id;
  console.log($scope.index);

  $scope.isPicture = function(datum) {
    if(datum.type === 'picture'){
      return true;
    }
    return false;
  };

  $scope.isText = function(datum) {
    if(datum.type === 'text'){
      return true;
    }
    return false;
  };


}]);
