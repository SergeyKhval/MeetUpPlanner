'use strict';
/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('meetUpPlannerApp')
  .controller('LoginCtrl', function ($scope, Auth, User, $location) {
    $scope.passwordLogin = function (email, pass) {
      $scope.err = null;
      Auth.$authWithPassword({
        email: email,
        password: pass
      }, {
        rememberMe: true
      }).then(
        redirect, showError
      );
    };

    $scope.createAccount = function (user) {
      if (user.password === user.confirm) {
        User.register(user).then(redirect, showError);
      }

    };

    function redirect() {
      $location.path('/event/add');
    }

    function showError(err) {
      $scope.err = err;
    }


  });
