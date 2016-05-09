'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['nl_NL'] = {
    prefixAgo: null,
    prefixFromNow: 'over',
    suffixAgo: 'geleden',
    suffixFromNow: 'vanaf nu',
    seconds: 'een paar seconden',
    minute: 'ongeveer een minuut',
    minutes: '%d minuten',
    hour: 'een uur',
    hours: '%d uur',
    day: 'een dag',
    days: '%d dagen',
    month: 'een maand',
    months: '%d maanden',
    year: 'een jaar',
    years: '%d jaar',
    numbers: []
  };
});
