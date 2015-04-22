'use strict';

/**
 * @ngdoc function
 * @name ticketInspectorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ticketInspectorApp
 */
angular.module('parkingInspectorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
