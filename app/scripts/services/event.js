'use strict';

/**
 * @ngdoc service
 * @name meetUpPlannerApp.event
 * @description
 * # event
 * Factory in the meetUpPlannerApp.
 */
angular.module('meetUpPlannerApp')
  .factory('Event', function (Ref, $firebaseArray) {
    var eventsRef = Ref.child('events'),
      eventsArray = $firebaseArray(eventsRef);

    function createEvent(event){
      return eventsArray.$add(event);
    }

    function allEvents(){
      return eventsArray;
    }

    // Public API here
    return {
      createEvent: createEvent,
      allEvents: allEvents
    };
  });
