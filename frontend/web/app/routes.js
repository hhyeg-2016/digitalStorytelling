
angular.module('dStory')
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/display');
            $stateProvider
              .state('main', {
                abstract: 'true',
                templateUrl: '/app/views/main.html'
              })
              .state('main.display', {
                url: '/display',
                templateUrl: '/app/views/display.html'
              })
              .state('main.submit', {
                url: '/submit',
                  templateUrl: '/app/views/submit.html'
              })
        });
