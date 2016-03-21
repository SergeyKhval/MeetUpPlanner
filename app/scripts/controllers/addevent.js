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
    $scope.event = Event.getRememberedEvent() || {};

    $scope.rememberEvent = function (form, event) {
      if (form.$valid) {
        $scope.event.startdate = $scope.startdate;
        $scope.event.enddate = $scope.enddate;
        Event.rememberEvent(event);
        $location.path('/event/confirm');
      }
    };

    $scope.compareDates = function (firstDate, secondDate) {
      return new Date(firstDate) > new Date(secondDate);
    };

    $scope.validateForm = function (form) {
      return form.$invalid || $scope.compareDates($scope.startdate, $scope.enddate);
    }

    $scope.eventtypes = ['Party', 'Meeting', 'Conference', 'Dinner', 'Seminar', 'Charity', 'Award ceremony'];

    $scope.startDateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      showWeeks: false
    };

    $scope.endDateOptions = {
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
    };

    $scope.mapoptions = {
      autocomplete: true,
      inputName: '#google-map-locator-address'
    };

    $scope.location = {
      latitude: 12.8139068,
      longitude: 77.6516683
    };
  });
