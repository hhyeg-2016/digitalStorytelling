angular.module('dStory')
.controller('homeController', ['$scope', 'storyService', function($scope, storyService) {
  $scope.stories = storyService.stories;
  $scope.index = 0;
  $scope.currStory = $scope.stories[$scope.index];
  console.log($scope.currStory);
  console.log($scope.index);

  $scope.nextStory = function() {
    console.log($scope.index);
    console.log('nextStory');
    if($scope.index < $scope.stories.length - 1){
      $scope.index++;
      $scope.currStory = $scope.stories[$scope.index];
    } else if($scope.index === $scope.stories.length - 1) {
      $scope.index = 0;
      $scope.currStory = $scope.stories[$scope.index];
    } else {
      console.log('scope index out of bounds nextStory');
    }
  };

  $scope.prevStory = function() {
    console.log('prevStory');
    console.log($scope.index);
    if($scope.index === 0){
      $scope.index = $scope.stories.length - 1;
      $scope.currStory = $scope.stories[$scope.index];
    } else if ($scope.index > 0 && $scope.index <= $scope.stories.length - 1){
      $scope.index--;
      $scope.currStory = $scope.stories[$scope.index];
    } else {
      console.log('scope index out of bounds prevStory');
    }
  };

}]);
