angular.module('dStory')
.controller('submitController', ['$scope', 'dataService', '$state', function($scope, $state, dataService) {

  $scope.master = {};

  $scope.submit = function(element) {
    var promise = dataService.pushData(element);
  };

  $scope.imageUpload = function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = $scope.imageIsLoaded;
      reader.readAsDataURL(file);
  };

}]);
