'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['da_DK'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'siden',
    suffixFromNow: null,
    seconds: 'mindre end et minut',
    minute: 'omkring et minut',
    minutes: '%d minuter',
    hour: 'omkring en time',
    hours: 'omkring %d timer',
    day: 'en dag',
    days: '%d dage',
    month: 'omkring en m\xe5ned',
    months: '%d m\xe5neder',
    year: 'omkring et \xe5r',
    years: '%d \xe5r',
    numbers: []
  };
});
