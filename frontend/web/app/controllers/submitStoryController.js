angular.module('dStory')
.controller('submitStoryController', ['$scope', 'storyService', '$state', function($scope, storyService, $state) {
  $scope.master = {};
  $scope.imageUrl = "";

  $scope.submit = function() {
    console.log($scope.imageUrl);
    console.log($scope.title);
    console.log($scope.descr);
    storyService.pushStory({headpic: $scope.imageUrl, title:  $scope.title, descr: $scope.descr});
    $state.go('home');
  };

  $scope.imageUpload = function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = $scope.imageIsLoaded;
      reader.readAsDataURL(file);
  };

  $scope.imageIsLoaded = function(e){
    $scope.$apply(function() {
      $scope.imageUrl = e.target.result;
    });

  };
}]);
