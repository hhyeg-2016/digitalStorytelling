var app = angular.module('dStory', ['ngMaterial', 'ui.router'])
          .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
              .primaryPalette('blue')
              .accentPalette('deep-purple');
          });
