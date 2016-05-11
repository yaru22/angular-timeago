'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['de_DE'] = {
    prefixAgo: 'vor',
    prefixFromNow: 'in',
    suffixAgo: null,
    suffixFromNow: null,
    seconds: 'weniger als einer Minute',
    minute: 'ca. einer Minute',
    minutes: '%d Minuten',
    hour: 'ca. einer Stunde',
    hours: 'ca. %d Stunden',
    day: 'einem Tag',
    days: '%d Tagen',
    month: 'ca. einem Monat',
    months: '%d Monaten',
    year: 'ca. einem Jahr',
    years: '%d Jahren',
    numbers: []
  };
});
