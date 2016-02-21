angular.module('dStory')
.controller('homeController', ['$scope', '$state', 'storyService', '$mdMedia', '$mdDialog',
function($scope, $state, storyService, $mdMedia, $mdDialog) {
  console.log(storyService);
  $scope.stories = storyService.stories;
  console.log($scope.stories);
  $scope.index = 0;
  $scope.currStory = $scope.stories[$scope.index];
  console.log($scope.currStory);
  console.log($scope.index);
  $scope.hidden = false;


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
/*
  $scope.select = function(){
    console.log($scope.index);
    $state.go('display', {id: $scope.index});
  }
*/
  $scope.select = function($event) {
    storyService.currStory = $scope.currStory; 
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    //For this chunk, information on what the user will have displayed to them as the login is here.
    $mdDialog.show({
      controller: 'videoController',
      templateUrl: '/app/views/video.html',
      parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
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
