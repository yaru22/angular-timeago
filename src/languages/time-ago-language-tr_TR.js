'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['tr_TR'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'önce',
    suffixFromNow: 'şu andan itibaren',
    seconds: 'bir dakikadan daha az',
    minute: 'bir dakika gibi',
    minutes: '%d dakika',
    hour: 'bir saat gibi',
    hours: '%d saat gibi',
    day: 'bir gün',
    days: '%d gün',
    month: 'bir ay gibi',
    months: '%d ay',
    year: 'bir yıl gibi',
    years: '%d yıl',
    numbers: []
  };
});
