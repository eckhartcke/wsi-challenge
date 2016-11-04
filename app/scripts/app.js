'use strict';

/**
 * @ngdoc overview
 * @name wsiUiDemoApp
 * @description
 * # wsiUiDemoApp
 *
 * Main module of the application.
 */
angular
  .module('wsiUiDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/challenge', {
        templateUrl: 'views/challenge.html',
        controller: 'ChallengeCtrl',
        controllerAs: 'challenge'
      })
      .otherwise({
        redirectTo: '/about'
      });
  });
