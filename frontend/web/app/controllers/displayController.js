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
    console.log('called');
    var closure = function() {
      var promise = dataService.getPic();
      var pic = promise.then(function(picData){
        thing = picData;
        return thing;
      }, function(error) {
        console.log(error);
      });
      return thing;
    }
    return closure();
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
