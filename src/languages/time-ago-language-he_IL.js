'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['he_IL'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'לפני',
    suffixFromNow: 'מעכשיו',
    seconds: 'פחות מדקה',
    minute: 'כדקה',
    minutes: '%d דקות',
    hour: 'כשעה',
    hours: 'כ %d שעות',
    day: 'יום',
    days: '%d ימים',
    month: 'כחודש',
    months: '%d חודשים',
    year: 'כשנה',
    years: '%d שנים',
    numbers: []
  };
});
