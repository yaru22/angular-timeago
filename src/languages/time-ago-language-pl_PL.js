'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['pl_PL'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'temu',
    suffixFromNow: 'od teraz',
    seconds: 'mniej niż minuta',
    minute: 'około minuty',
    minutes: '%d minut',
    hour: 'około godziny',
    hours: 'około %d godzin',
    day: 'dzień',
    days: '%d dni',
    month: 'około miesiąca',
    months: '%d miesięcy',
    year: 'około roku',
    years: '%d lat',
    numbers: []
  };
});
