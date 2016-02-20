angular.module('dStory')
.controller('submitController', ['$scope', 'dataService', function($scope, dataService) {

    $scope.imageUpload = function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(file);
    };

}]);
