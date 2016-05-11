'use strict';

angular.module('yaru22.angular-timeago').filter('timeAgo', function(nowTime, timeAgo) {
  function timeAgoFilter(value, format, timezone) {
    var fromTime = timeAgo.parse(value);
    var diff = nowTime() - fromTime;
    return timeAgo.inWords(diff, fromTime, format, timezone);
  }
  timeAgoFilter.$stateful = true;
  return timeAgoFilter;
});
