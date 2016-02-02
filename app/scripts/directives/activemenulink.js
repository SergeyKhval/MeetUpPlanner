/* globals $ */
'use strict';

/**
 * @ngdoc directive
 * @name meetUpPlannerApp.directive:activeMenuLink
 * @description
 * # activeMenuLink
 */
angular.module('meetUpPlannerApp')
  .directive('activeMenuLink', function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var activeClass = attrs.activeMenuLink,
          path = $(element).children('a')[0].hash.substring(1);

        scope.location = $location;

        scope.$watch('location.path()', function(newPath){
          return path === newPath ? element.addClass(activeClass) : element.removeClass(activeClass);
        });
      }
    };
  });
