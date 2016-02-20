var app = angular.module('dStory', ['ngMaterial', 'ui.router'])
          .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
              .primaryPalette('green')
              .accentPalette('brown');
          });
