angular.module('dStory')
.controller('displayController', ['$scope',
function($scope) {
  $scope.profilePicture = "http://localhost:5000/static/img/elderly-man-smile.jpg";

  $scope.data = [
    {
      type: text,
      content: 'Morbi faucibus tortor ut mattis ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse.'
    },
    {
      type: picture,
      content: ''
    }
  ];
}]);
