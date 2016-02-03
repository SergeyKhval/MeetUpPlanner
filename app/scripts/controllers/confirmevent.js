'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:ConfirmeventCtrl
 * @description
 * # ConfirmeventCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('ConfirmeventCtrl', function ($scope, Event) {

    $scope.event = Event.getRememberedEvent();

    $scope.confirmEvent = function(event){
      return Event.createEvent(event);
    };

  });
