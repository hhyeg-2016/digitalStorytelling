angular.module('dStory')
.controller('displayController', ['$scope',
function($scope) {
  var $scope.profilePicture = "static/img/elderly-man-smile.jpg";

  var $scope.data = [
    {
      type: 'text',
      content: 'Morbi faucibus tortor ut mattis ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse.'
      createdAt: '2016/11/14'
    },
    {
      type: 'picture',
      content: 'web/static/img/elderly-man-smile.jpg',
      createdAt: '2016/11/20'
    }
  ];

  var $scope.isPicture = function(datum) {
    if(datum.type === 'picture'){
      return true;
    }
    return false;
  };

  var $scope.isText = function(datum) {
    if(datum.type === 'text'){
      return true;
    }
    return false;
  };



}]);
