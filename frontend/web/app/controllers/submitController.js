angular.module('dStory')
.controller('submitController', ['$scope',  '$state', 'storyService', function($scope, $state, storyService) {
  $scope.master = {};

  $scope.submit = function(element) {
  };

  $scope.fileUpload = function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = $scope.fileIsLoaded;
      reader.readAsDataURL(file);
  };

}]);
