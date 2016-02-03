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
      eventsArray = $firebaseArray(eventsRef),
      rememberedEvent;

    function createEvent(event){
      return eventsArray.$add(event);
    }

    function allEvents(){
      return eventsArray;
    }

    function rememberEvent(event){
      rememberedEvent = event;
      return rememberedEvent;
    }

    function getRememberedEvent(){
      return rememberedEvent;
    }

    return {
      createEvent: createEvent,
      rememberEvent: rememberEvent,
      getRememberedEvent: getRememberedEvent,
      allEvents: allEvents
    };
  });
