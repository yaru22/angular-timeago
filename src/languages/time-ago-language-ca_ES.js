'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['ca_ES'] = {
    prefixAgo: 'fa',
    prefixFromNow: 'd\'aquí',
    suffixAgo: null,
    suffixFromNow: null,
    seconds: 'menys d\'un minut',
    minute: 'prop d\'un minut',
    minutes: '%d minuts',
    hour: 'prop d\'una hora',
    hours: 'prop de %d hores',
    day: 'un dia',
    days: '%d dies',
    month: 'prop d\'un mes',
    months: '%d mesos',
    year: 'prop d\'un any',
    years: '%d anys',
    numbers: []
  };
});
