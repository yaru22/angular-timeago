'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['it_IT'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'fa',
    suffixFromNow: 'da ora',
    seconds: 'meno di un minuto',
    minute: 'circa un minuto',
    minutes: '%d minuti',
    hour: 'circa un\' ora',
    hours: 'circa %d ore',
    day: 'un giorno',
    days: '%d giorni',
    month: 'circa un mese',
    months: '%d mesi',
    year: 'circa un anno',
    years: '%d anni',
    numbers: []
  };
});
