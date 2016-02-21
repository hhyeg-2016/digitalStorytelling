angular.module('dStory')
.controller('displayController', ['$scope', 'storyService', '$stateParams', '$interval', '$state',
function($scope, storyService,$stateParams, $interval, $state) {
  console.log('displayController');
  console.log($stateParams.id);
  $scope.index = $stateParams.id;
  $scope.stories = storyService.stories;
  $scope.story = $scope.stories[$scope.index];
  console.log($scope.story);
  $scope.content = $scope.story.content;
  $scope.contentIndex = 0;
  $scope.currContent = $scope.content[$scope.contentIndex];
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

  $scope.callAtInterval = function() {
    console.log("$scope.callAtInterval - Interval occurred");
    if ($scope.contentIndex < $scope.content.length - 1){
      $scope.contentIndex++;
      $scope.currContent = $scope.content[$scope.contentIndex];
    } else {
      $interval.cancel(interval);
      $state.go('home');
    }
  };

  var interval = $interval(function() {
    $scope.callAtInterval();
  }, 3000);


}]);
