angular.module('dStory')
.controller('homeController', ['$scope', 'storyService', function(scope, storyService) {
  $scope.stories = storyService.stories;
  $scope.index = 0;
  $scope.currStory = $scope.stories[$scope.index];

  $scope.nextStory = function() {
    if($scope.index < $scope.stories.length - 1){
      $scope.index++;
    } else if($scope.index === $scope.stories.length - 1) {
      $scope.index = 0;
    } else {
      console.log('scope index out of bounds nextStory');
    }
  };

  $scope.prevStory = function() {
    if($scope.index === 0){
      $scope.index = $scope.stories.length - 1;
    } else if ($scope.index > 0 && $scope.index < $scope.stories.length - 1){
      $scope.index--;
    } else {
      console.log('scope index out of bounds prevStory');
    }
  };
  
}]);
