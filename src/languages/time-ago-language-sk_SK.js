'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {

  /*
   * Czech language uses 2 different versions for future based on the digit being lower then 5 or not.
   */
  function resolvePastAndFuture(past, future, future5) {
    return function(d, millis) {
      var isFuture = millis < 0;

      if (!isFuture) {
        return past;
      } else {
        if (d <= 4) {
          return future;
        } else {
          return future5;
        }
      }
    };
  }

  timeAgoSettings.strings['sk_SK'] = {
    prefixAgo: 'pred',
    prefixFromNow: 'za',
    suffixAgo: null,
    suffixFromNow: null,

    //the below works for past
    seconds: resolvePastAndFuture('menej ako minútou', 'menej ako minútu', 'menej ako minútu'),
    minute: resolvePastAndFuture('minútou', 'minútu', 'minútu'),
    minutes: resolvePastAndFuture('%d minútami', '%d minúty', '%d minút'),
    hour: resolvePastAndFuture('hodinou', 'hodinu', 'hodinu'),
    hours: resolvePastAndFuture('%d hodinami', '%d hodiny', '%d hodín'),
    day: resolvePastAndFuture('dňom', 'deň', 'deň'),
    days: resolvePastAndFuture('%d dňami', '%d dni', '%d dní'),
    month: resolvePastAndFuture('mesiacom', 'mesiac', 'mesiac'),
    months: resolvePastAndFuture('%d mesiacmi', '%d mesiace', '%d mesiacov'),
    year: resolvePastAndFuture('rokom', 'rok', 'rok'),
    years: resolvePastAndFuture('%d rokmi', '%d roky', '%d rokov'),
    numbers: []
  };
});
