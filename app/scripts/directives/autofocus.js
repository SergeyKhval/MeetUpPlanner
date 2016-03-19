'use strict';

/**
 * @ngdoc directive
 * @name meetUpPlannerApp.directive:autofocus
 * @description
 * # autofocus
 */
angular.module('meetUpPlannerApp')
  .directive('autofocus', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: function ($scope, $element) {
        $timeout(function () {
          $element[0].focus();
        });
      }
    };
  }]);
