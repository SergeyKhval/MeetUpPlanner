'use strict';

describe('Directive: datevalidator', function () {

  // load the directive's module
  beforeEach(module('meetUpPlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<datevalidator></datevalidator>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the datevalidator directive');
  }));
});
