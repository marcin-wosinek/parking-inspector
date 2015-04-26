'use strict';

/**
 * @ngdoc function
 * @name parkingInspectorApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the parkingInspectorApp
 */
angular.module('parkingInspectorApp')
  .controller('ReportCtrl', function ($scope, $mdDialog) {
    $scope.getLocation = function() {
      $mdDialog.show(
        $mdDialog.alert()
        .title('Geograpy data is not available')
        .content('I can get your latitude & longitude. Please provide it manualy.')
        .ariaLabel('Geography data alert')
        .ok('Got it!')
      );
    };
  });
