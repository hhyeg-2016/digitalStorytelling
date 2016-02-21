angular.module('dStory')
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/home');
            $stateProvider
              .state('main', {
                abstract: 'true',
                templateUrl: '/app/views/main.html'
              })
              .state('main.display', {
                url: '/display',
                controller: 'displayController',
                templateUrl: '/app/views/display.html'
              })
              .state('main.submit', {
                url: '/submit',
                controller: 'submitController',
                templateUrl: '/app/views/submit.html'
              })
              .state('home', {
                url: '/home',
                controller: 'homeController',
                templateUrl: '/app/views/home.html'
              })
        });
