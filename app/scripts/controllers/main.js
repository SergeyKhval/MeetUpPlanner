'use strict';

/**
 * @ngdoc function
 * @name meetUpPlannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meetUpPlannerApp
 */
angular.module('meetUpPlannerApp')
  .controller('MainCtrl', function ($scope, Event) {
    $scope.events = null;

    Event.allEvents().$loaded().then(function(data){
      $scope.events = data;
    });
  });
