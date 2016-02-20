
angular.module('chemGeno')
        .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/display');
            $stateProvider
              .state('main', {
                abstract: 'true',
                templateUrl: '/app/views/main.html'
              })
              .state('main.display', {
                url: '/search',
                templateUrl: '/app/views/search.html'
              })
              .state('main.submit', {
                url: '/submit',
                  templateUrl: '/app/views/submit.html'
              })
        });
