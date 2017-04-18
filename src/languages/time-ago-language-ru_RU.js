'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['ru_RU'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'назад',
    suffixFromNow: 'с текущего момента',
    seconds: 'менее минуты',
    minute: 'около минуты',
    minutes: '%d мин.',
    hour: 'около часа',
    hours: 'около %d ч.',
    day: 'день',
    days: '%d дн.',
    month: 'около месяца',
    months: '%d мес.',
    year: 'около года',
    years: '%d года',
    numbers: []
  };
});
