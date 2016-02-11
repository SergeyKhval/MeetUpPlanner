'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('NavbarCtrl', function ($scope, Auth) {
    $scope.logout = function(){
      console.log('clicked');
      Auth.$unauth();
    };
  });
