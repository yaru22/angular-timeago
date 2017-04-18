'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {

  /**
   * Czech language uses 2 different versions for future based on the digit being
   * lower than 5 or not.
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

  timeAgoSettings.strings['cs_CZ'] = {
    prefixAgo: 'prěd',
    prefixFromNow: 'za',
    suffixAgo: null,
    suffixFromNow: null,

    //the below works for past
    seconds: resolvePastAndFuture('méně než minutou', 'méne než minutu', 'méne než minutu'),
    minute: resolvePastAndFuture('minutou', 'minutu', 'minutu'),
    minutes: resolvePastAndFuture('%d minutami', '%d minuty', '%d minút'),
    hour: resolvePastAndFuture('hodinou', 'hodinu', 'hodinu'),
    hours: resolvePastAndFuture('%d hodinama', '%d hodiny', '%d hodin'),
    day: resolvePastAndFuture('dnem', 'den', 'den'),
    days: resolvePastAndFuture('%d dny', '%d dny', '%d dnů'),
    month: resolvePastAndFuture('měsícem', 'měsíc', 'měsíc'),
    months: resolvePastAndFuture('%d měsíci', '%d měsíce', '%d měsíců'),
    year: resolvePastAndFuture('rokem', 'rok', 'rok'),
    years: resolvePastAndFuture('%d lety', '%d roky', '%d let'),
    numbers: []
  };
});
