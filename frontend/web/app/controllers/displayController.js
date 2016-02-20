angular.module('dStory')
.controller('displayController', ['$scope',
function($scope) {
<<<<<<< HEAD
  $scope.profilePicture = "http://localhost:5000/static/img/elderly-man-smile.jpg";
=======
  $scope.pic = "static/img/elderly-man-smile.jpg";
>>>>>>> 2d89e4871865699ef82b3a80a56689424cebd25e

  $scope.data = [
    {
      type: 'text',
      content: 'Morbi faucibus tortor ut mattis ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse.',
      createdAt: '2016/11/14'
    },
    {
      type: 'picture',
      content: 'web/static/img/elderly-man-smile.jpg',
      createdAt: '2016/11/20'
    }
  ];

  $scope.isPicture = function(datum) {
    if(datum.type === 'picture'){
      return true;
    }
    return false;
  };

  $scope.isText = function(datum) {
    if(datum.type === 'text'){
      return true;
    }
    return false;
  };
}]);
