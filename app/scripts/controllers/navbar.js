'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.logout = function(){
      Auth.$unauth();
      $location.path('#/');
    };
  });
