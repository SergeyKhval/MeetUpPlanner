'use strict';

describe('Controller: ConfirmeventCtrl', function () {

  // load the controller's module
  beforeEach(module('meetUpPlannerApp'));

  var ConfirmeventCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmeventCtrl = $controller('ConfirmeventCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
