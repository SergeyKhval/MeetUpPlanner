'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:AddeventCtrl
 * @description
 * # AddeventCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('AddeventCtrl', function ($scope, $location, Event) {
    $scope.event = Event.getRememberedEvent();

    $scope.rememberEvent = function (event) {
      Event.rememberEvent(event);
      $location.path('/event/confirm');
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      showWeeks: false
    };

    $scope.openedPopups = {
      startDate: false,
      endDate: false
    };

    $scope.openDatePopup = function (popup) {
      $scope.openedPopups[popup] = true;
    };

    $scope.timePicker = {
      hstep: 1,
      mstep: 15
    }
  });
