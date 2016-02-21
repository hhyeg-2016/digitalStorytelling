angular.module('dStory')
.controller('displayController', ['$scope', 'storyService', '$stateParams',
function($scope, storyService,$stateParams) {
  console.log('displayController');
  console.log($stateParams.id);
  $scope.index = $stateParams.id;
  $scope.stories = storyService.stories;
  $scope.story = $scope.stories[$scope.index];
  console.log($scope.story);
  $scope.content = $scope.story.content;
  console.log($scope.content);

  $scope.isPicture = function(content) {
    if(content.type === 'picture'){
      return true;
    }
    return false;
  };

  $scope.isText = function(content) {
    if(content.type === 'text'){
      return true;
    }
    return false;
  };


}]);
