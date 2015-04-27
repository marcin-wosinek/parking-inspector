'use strict';

/**
 * @ngdoc service
 * @name parkingInspectorApp.geolocation
 * @description
 * # geolocation
 * Service in the parkingInspectorApp.
 */
angular.module('parkingInspectorApp')
  .service('geolocation', function($mdDialog, $rootScope) {
    var error = function(message) {
      $mdDialog.show(
        $mdDialog.alert()
        .title('Geograpy data is not available')
        .content('I can get your latitude & longitude. Please provide it manualy. ' + message + '.')
        .ariaLabel('Geography data alert')
        .ok('Got it!')
      );
    };

    this.getLocation = function(callback) {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          callback(position);
          $rootScope.$apply();
        }, function() {
          error('Geolocation error');
        });
      }
      else {
        error('Geolocation not available');
      }
    };
  });
