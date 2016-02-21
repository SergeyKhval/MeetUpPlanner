'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:ConfirmeventCtrl
 * @description
 * # ConfirmeventCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('ConfirmeventCtrl', function ($location, $scope, Auth, Event) {

    function showError(err) {
      $scope.err = err;
    }

    function cancelEvent() {
      Event.rememberEvent({});
      $location.path('#/');
    }

    function confirmEvent(event) {
      Event.createEvent(event).then(function () {
        Event.rememberEvent({});
        $location.path('#/');
      });
    }

    function loginAndCreateEvent(user) {
      $scope.err = null;
      Auth.$authWithPassword({
        email: user.email,
        password: user.password
      }, {
        rememberMe: true
      }).then(
        function () {
          confirmEvent($scope.event);
        }, showError
      );
    }

//    function registerAndCreateEvent(user) {
  //
  //    }

    $scope.event = Event.getRememberedEvent();

    $scope.loginMode = true;

    $scope.confirmEvent = confirmEvent;

    $scope.cancelEvent = cancelEvent;

    $scope.loginAndCreateEvent = loginAndCreateEvent;
  });
