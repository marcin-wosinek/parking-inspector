'use strict';

/**
 * @ngdoc function
 * @name ticketInspectorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ticketInspectorApp
 */
angular.module('ticketInspectorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
