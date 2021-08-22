'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['oc_FR'] = {
    prefixAgo: 'fa',
    prefixFromNow: 'd’aquí',
    suffixAgo: null,
    suffixFromNow: null,
    seconds: 'mens d\'una minuta',
    minute: 'gaireben una minuta',
    minutes: '%d minutas',
    hour: 'gaireben una ora',
    hours: 'gaireben %d oras',
    day: 'un jorn',
    days: '%d jorns',
    month: 'gairebne un mes',
    months: '%d meses',
    year: 'gaireben d\'un an',
    years: '%d ans',
    numbers: []
  };
});
