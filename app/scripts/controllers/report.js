'use strict';

/**
 * @ngdoc function
 * @name parkingInspectorApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the parkingInspectorApp
 */
angular.module('parkingInspectorApp')
  .controller('ReportCtrl', function ($scope, geolocation) {
    $scope.data = {};

    $scope.getLocation = function() {
      geolocation.getLocation(function (position) {
        $scope.data.latitude = position.coords.latitude;
        $scope.data.longitude = position.coords.longitude;
      });
    };
  });
