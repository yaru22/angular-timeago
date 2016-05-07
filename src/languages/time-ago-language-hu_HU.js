'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['hu_HU'] = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: null,
    seconds: 'kevesebb mint egy perce',
    minute: 'körülbelül egy perce',
    minutes: '%d perce',
    hour: 'körülbelül egy órája',
    hours: 'körülbelül %d órája',
    day: 'egy napja',
    days: '%d napja',
    month: 'körülbelül egy hónapja',
    months: '%d hónapja',
    year: 'körülbelül egy éve',
    years: '%d éve',
    numbers: []
  };
});
