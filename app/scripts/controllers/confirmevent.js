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

    function cancelEvent(){
      Event.rememberEvent({});
      $location.path('#/');
    }

    function confirmEvent(event){
      Event.createEvent(event).then(function(){
        Event.rememberEvent({});
        $location.path('#/');
      });
    }

    $scope.event = Event.getRememberedEvent();

    $scope.loginMode = true;

    $scope.confirmEvent = confirmEvent;

    $scope.cancelEvent = cancelEvent;
  });
