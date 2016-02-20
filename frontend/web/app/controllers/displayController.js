angular.module('dStory')
.controller('displayController', ['$scope', 'dataService',
function($scope, dataService) {
  $scope.data = function() {
    var d = [];
    var promise = dataService.getData();
    promise.then(function(data){
      d = data.slice();
    }, function(error) {
      console.log(error);
    });
    return d;
  };

  $scope.picture = function() {
    var p = '';
    var promise = dataService.getPicture();
    promise.then(function(pic){
      p = pic;
    }, function(error) {
      console.log(error);
    });
  };

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
