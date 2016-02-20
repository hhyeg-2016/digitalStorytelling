angular.module('dStory')
.controller('displayController', ['$scope',
function($scope) {
  var profilePicture = "static/img/elderly-man-smile.jpg";

  var data = [
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
