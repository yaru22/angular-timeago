'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['sv_SE'] = {
    prefixAgo: null,
    prefixFromNow: 'om',
    suffixAgo: 'sen',
    suffixFromNow: null,
    seconds: 'mindre än en minut',
    minute: 'cirka en minut',
    minutes: '%d minuter',
    hour: 'cirka en timme',
    hours: 'cirka %d timmar',
    day: 'en dag',
    days: '%d dagar',
    month: 'cirka en månad',
    months: '%d månader',
    year: 'cirka ett år',
    years: '%d år',
    numbers: []
  };
});
