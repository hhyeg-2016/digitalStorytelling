angular.module('dStory')
.controller('homeController', ['$scope', '$state', 'storyService',
function($scope, $state, storyService) {
  console.log(storyService);
  $scope.stories = storyService.stories;
  console.log($scope.stories);
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

  $scope.select = function(){
    console.log($scope.index);
    $state.go('main.display', {id: $scope.index});
  }

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
