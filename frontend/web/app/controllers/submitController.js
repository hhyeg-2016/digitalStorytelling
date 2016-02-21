angular.module('dStory')
.controller('submitController', ['$scope', 'storyService', '$state', function($scope, $state, storyService) {

  $scope.master = {};

  $scope.submit = function(element) {
    storyService.pushData(element);
  };

  $scope.imageUpload = function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = $scope.imageIsLoaded;
      reader.readAsDataURL(file);
  };

}]);
