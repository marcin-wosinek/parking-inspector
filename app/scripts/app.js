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
  .module('parkingInspectorApp', [
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ngMaterial'
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
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
