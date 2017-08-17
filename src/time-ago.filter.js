'use strict';

angular.module('yaru22.angular-timeago').filter('timeAgo', function(nowTime, timeAgo) {
  function timeAgoFilter(value, format, timezone) {
    if (!!value) {
      var fromTime = timeAgo.parse(value);
      var diff = nowTime() - fromTime;
      return timeAgo.inWords(diff, fromTime, format, timezone);
    }
    return null;
  }
  timeAgoFilter.$stateful = true;
  return timeAgoFilter;
});
