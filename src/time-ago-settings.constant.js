'use strict';

angular.module('yaru22.angular-timeago').constant('timeAgoSettings', {
  refreshMillis: 1000,
  allowFuture: false,
  overrideLang: null,
  fullDateAfterSeconds: null,
  strings: {},
  breakpoints: {
    secondsToMinute: 45, // in seconds
    secondsToMinutes: 90, // in seconds
    minutesToHour: 45, // in minutes
    minutesToHours: 90, // in minutes
    hoursToDay: 24, // in hours
    hoursToDays: 42, // in hours
    daysToMonth: 30, // in days
    daysToMonths: 45, // in days
    daysToYear: 365, // in days
    yearToYears: 1.5 // in year
  }
});
