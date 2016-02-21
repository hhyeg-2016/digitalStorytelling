angular.module('dStory')
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/home');
            $stateProvider
              .state('display', {
                url: '/display/:id',
                controller: 'displayController',
                templateUrl: '/app/views/display.html'
              })
              .state('submit', {
                url: '/submit',
                controller: 'submitController',
                templateUrl: '/app/views/submit.html'
              })
              .state('submitStory', {
                url: '/submitStory',
                controller: 'submitController',
                templateUrl: '/app/views/submitStory.html'
              })
              .state('home', {
                url: '/home',
                controller: 'homeController',
                templateUrl: '/app/views/home.html'
              })

        });
