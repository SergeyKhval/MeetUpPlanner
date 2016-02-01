'use strict';

describe('Directive: activeMenuLink', function () {

  // load the directive's module
  beforeEach(module('meetUpPlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<active-menu-link></active-menu-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the activeMenuLink directive');
  }));
});
