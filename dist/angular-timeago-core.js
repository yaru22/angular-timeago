/**
 * Angular directive/filter/service for formatting date so that it displays how long ago the given time was compared to now.
 * @version v0.3.0 - 2016-05-12
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
  strings: {}
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
      var fromTime = timeAgo.parse(scope.fromTime);

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
      var string = angular.isFunction(stringOrFunction) ?
        stringOrFunction(number, distanceMillis) : stringOrFunction;
      var value = ($l.numbers && $l.numbers[number]) || number;
      return string.replace(/%d/i, value);
    }

    var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
      seconds < 90 && substitute($l.minute, 1) ||
      minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
      minutes < 90 && substitute($l.hour, 1) ||
      hours < 24 && substitute($l.hours, Math.round(hours)) ||
      hours < 42 && substitute($l.day, 1) ||
      days < 30 && substitute($l.days, Math.round(days)) ||
      days < 45 && substitute($l.month, 1) ||
      days < 365 && substitute($l.months, Math.round(days / 30)) ||
      years < 1.5 && substitute($l.year, 1) ||
      substitute($l.years, Math.round(years));

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
