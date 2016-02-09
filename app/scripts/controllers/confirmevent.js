'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:ConfirmeventCtrl
 * @description
 * # ConfirmeventCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('ConfirmeventCtrl', function ($location, $scope, Event) {

    $scope.event = Event.getRememberedEvent();

    $scope.confirmEvent = function (event) {
      return Event.createEvent(event);
    };

    $scope.cancelEvent = function () {
      Event.rememberEvent({});
      $location.path('#/');
    };
  });
