'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:ConfirmeventCtrl
 * @description
 * # ConfirmeventCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('ConfirmeventCtrl', function ($location, $scope, Auth, Event, User) {

    function showError(err) {
      console.log(err);
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

    function successRegistration() {
      confirmEvent($scope.event);
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

    function registerAndCreateEvent(user) {
      if (user.password === user.confirm) {
        User.register(user).then(successRegistration, showError);
      }
    }

    $scope.event = Event.getRememberedEvent();

    $scope.loginMode = true;

    $scope.confirmEvent = confirmEvent;

    $scope.cancelEvent = cancelEvent;

    $scope.loginAndCreateEvent = loginAndCreateEvent;

    $scope.registerAndCreateEvent = registerAndCreateEvent;
  });
