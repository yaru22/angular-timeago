/**
 * Angular directive/filter/service for formatting date so that it displays how long ago the given time was compared to now.
 * @version v0.4.4 - 2016-11-19
 * @link https://github.com/yaru22/angular-timeago
 * @author Brian Park <yaru22@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('yaru22.angular-timeago', []);

'use strict';

angular.module('yaru22.angular-timeago').factory('nowTime', ["$interval", "timeAgo", "timeAgoSettings", function($interval, timeAgo, timeAgoSettings) {
  var nowTime;

  function updateTime() {
    nowTime = Date.now();
  }
  updateTime();
  $interval(updateTime, timeAgoSettings.refreshMillis);

  return function() {
    return nowTime;
  };
}]);

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

'use strict';

angular.module('yaru22.angular-timeago').directive('timeAgo', ["timeAgo", "nowTime", function(timeAgo, nowTime) {
  return {
    scope: {
      fromTime: '@',
      format: '@'
    },
    restrict: 'EA',
    link: function(scope, elem) {
      var fromTime;

      // Track changes to fromTime
      scope.$watch('fromTime', function() {
        fromTime = timeAgo.parse(scope.fromTime);
      });

      // Track changes to time difference
      scope.$watch(function() {
        return nowTime() - fromTime;
      }, function(value) {
        angular.element(elem).text(timeAgo.inWords(value, fromTime, scope.format));
      });
    }
  };
}]);

'use strict';
/*global moment */

angular.module('yaru22.angular-timeago').factory('timeAgo', ["$filter", "timeAgoSettings", function($filter, timeAgoSettings) {
  var service = {};

  service.inWords = function(distanceMillis, fromTime, format, timezone) {

    var fullDateAfterSeconds = parseInt(timeAgoSettings.fullDateAfterSeconds, 10);

    if (!isNaN(fullDateAfterSeconds)) {
      var fullDateAfterMillis = fullDateAfterSeconds * 1000;
      if ((distanceMillis >= 0 && fullDateAfterMillis <= distanceMillis) ||
        (distanceMillis < 0 && fullDateAfterMillis >= distanceMillis)) {
        if (format) {
          return $filter('date')(fromTime, format, timezone);
        }
        return fromTime;
      }
    }

    var overrideLang = timeAgoSettings.overrideLang;
    var documentLang = document.documentElement.lang;
    var sstrings = timeAgoSettings.strings;
    var lang, $l;

    if (typeof sstrings[overrideLang] !== 'undefined') {
      lang = overrideLang;
      $l = sstrings[overrideLang];
    } else if (typeof sstrings[documentLang] !== 'undefined') {
      lang = documentLang;
      $l = sstrings[documentLang];
    } else {
      lang = 'en_US';
      $l = sstrings[lang];
    }

    var prefix = $l.prefixAgo;
    var suffix = $l.suffixAgo;
    if (timeAgoSettings.allowFuture) {
      if (distanceMillis < 0) {
        prefix = $l.prefixFromNow;
        suffix = $l.suffixFromNow;
      }
    }

    var seconds = Math.abs(distanceMillis) / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;

    function substitute(stringOrFunction, number) {
      number = Math.round(number);
      var string = angular.isFunction(stringOrFunction) ?
        stringOrFunction(number, distanceMillis) : stringOrFunction;
      var value = ($l.numbers && $l.numbers[number]) || number;
      return string.replace(/%d/i, value);
    }

    var breakpoints = timeAgoSettings.breakpoints;
    var words = seconds < breakpoints.secondsToMinute && substitute($l.seconds, seconds) ||
      seconds < breakpoints.secondsToMinutes && substitute($l.minute, 1) ||
      minutes < breakpoints.minutesToHour && substitute($l.minutes, minutes) ||
      minutes < breakpoints.minutesToHours && substitute($l.hour, 1) ||
      hours < breakpoints.hoursToDay && substitute($l.hours, hours) ||
      hours < breakpoints.hoursToDays && substitute($l.day, 1) ||
      days < breakpoints.daysToMonth && substitute($l.days, days) ||
      days < breakpoints.daysToMonths && substitute($l.month, 1) ||
      days < breakpoints.daysToYear && substitute($l.months, days / 30) ||
      years < breakpoints.yearToYears && substitute($l.year, 1) ||
      substitute($l.years, years);

    var separator = $l.wordSeparator === undefined ? ' ' : $l.wordSeparator;
    if (lang === 'he_IL') {
      return [prefix, suffix, words].join(separator).trim();
    } else {
      return [prefix, words, suffix].join(separator).trim();
    }
  };

  service.parse = function(input) {
    if (input instanceof Date) {
      return input;
    } else if ((typeof moment !== 'undefined') && moment.isMoment(input)) {
      return input.toDate();
    } else if (angular.isNumber(input)) {
      return new Date(input);
    } else if (/^\d+$/.test(input)) {
      return new Date(parseInt(input, 10));
    } else {
      var s = (input || '').trim();
      s = s.replace(/\.\d+/, ''); // remove milliseconds
      s = s.replace(/-/, '/').replace(/-/, '/');
      s = s.replace(/T/, ' ').replace(/Z/, ' UTC');
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); // -04:00 -> -0400
      return new Date(s);
    }
  };

  return service;
}]);

'use strict';

angular.module('yaru22.angular-timeago').filter('timeAgo', ["nowTime", "timeAgo", function(nowTime, timeAgo) {
  function timeAgoFilter(value, format, timezone) {
    var fromTime = timeAgo.parse(value);
    var diff = nowTime() - fromTime;
    return timeAgo.inWords(diff, fromTime, format, timezone);
  }
  timeAgoFilter.$stateful = true;
  return timeAgoFilter;
}]);
