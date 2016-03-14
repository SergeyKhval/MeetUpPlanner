'use strict';

/**
 * @ngdoc service
 * @name meetUpPlannerApp.user
 * @description
 * # user
 * Factory in the meetUpPlannerApp.
 */
angular.module('meetUpPlannerApp')
  .factory('User', function (Auth, $location, $q, Ref, $timeout) {


    var User = {};

    User.register = function (userObj) {
      function createProfile(user) {
        var ref = Ref.child('users/' + user.uid), def = $q.defer();
        ref.set({
          email: userObj.email,
          name: userObj.name,
          employer: userObj.employer,
          position: userObj.position
        }, function (err) {
          $timeout(function () {
            if (err) {
              def.reject(err);
            }
            else {
              def.resolve(ref);
            }
          });
        });
        return def.promise;
      }

      return Auth.$createUser({email: userObj.email, password: userObj.password})
        .then(function () {
          // authenticate so we have permission to write to Firebase
          return Auth.$authWithPassword({email: userObj.email, password: userObj.password}, {rememberMe: true});
        })
        .then(createProfile);
    };

    return User;
  });
