'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['ru'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'назад',
    suffixFromNow: null,
    seconds: 'меньше минуты',
    minute: 'около минуты',
    minutes: '%d мин.',
    hour: 'около часа',
    hours: 'около %d час.',
    day: 'день',
    days: '%d дн.',
    month: 'около месяца',
    months: '%d мес.',
    year: 'около года',
    years: '%d г.',
    numbers: []
  };
});
