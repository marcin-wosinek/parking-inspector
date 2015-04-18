'use strict';

/**
 * @ngdoc overview
 * @name ticketInspectorApp
 * @description
 * # ticketInspectorApp
 *
 * Main module of the application.
 */
angular
  .module('ticketInspectorApp', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
