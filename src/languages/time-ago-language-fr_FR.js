'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['fr_FR'] = {
    prefixAgo: 'il y a',
    prefixFromNow: 'dans',
    suffixAgo: null,
    suffixFromNow: null,
    seconds: 'moins d\'une minute',
    minute: 'environ une minute',
    minutes: '%d minutes',
    hour: 'environ une heure',
    hours: 'environ %d heures',
    day: 'un jour',
    days: '%d jours',
    month: 'environ un mois',
    months: '%d mois',
    year: 'environ un an',
    years: '%d ans',
    numbers: []
  };
});
