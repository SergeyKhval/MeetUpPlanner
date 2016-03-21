'use strict';

/**
 * @ngdoc directive
 * @name meetUpPlannerApp.directive:datevalidator
 * @description
 * # datevalidator
 */
angular.module('meetUpPlannerApp')
  .directive('datevalidator', function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attr, ngModel) {
        function validate(value) {
          if (value !== undefined && value !== null) {
            ngModel.$setValidity('badDate', true);
            if (value instanceof Date) {
              var d = Date.parse(value);
              // it is a date
              if (isNaN(d)) {
                ngModel.$setValidity('badDate', false);
              }
            } else {
              var myPattern = new RegExp(/^([0-9]{2})\.([0-9]{2})\.([0-9]{4})$/);
              if (value !== '' && !myPattern.test(value)) {
                ngModel.$setValidity('badDate', false);
              }
            }
          }
        }

        scope.$watch(function () {
          return ngModel.$viewValue;
        }, validate);
      }
    };
  });
