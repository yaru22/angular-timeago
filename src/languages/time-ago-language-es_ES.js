'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['es_ES'] = {
    prefixAgo: 'hace',
    prefixFromNow: 'dentro de',
    suffixAgo: null,
    suffixFromNow: null,
    seconds: 'menos de un minuto',
    minute: 'un minuto',
    minutes: '%d minutos',
    hour: 'una hora',
    hours: '%d horas',
    day: 'un día',
    days: '%d días',
    month: 'un mes',
    months: '%d meses',
    year: 'un año',
    years: '%d años',
    numbers: []
  };
});
