angular.module('dStory')
.controller('videoController', ['$scope', '$state', 'storyService', '$mdDialog', '$stateParams', '$interval',
function($scope, $state, storyService, $mdDialog, $stateParams, $interval) {
  console.log('videoController');
  console.log(storyService);
  console.log(storyService.currStory);
  $scope.story = storyService.currStory;
  $scope.content = $scope.story.content;
  $scope.contentIndex = 0;
  $scope.currContent = $scope.content[$scope.contentIndex];

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
      $mdDialog.cancel();
    }
  };

  var interval = $interval(function() {
    $scope.callAtInterval();
  }, 3000);
}]);
