'use strict';

angular.module('yaru22.angular-timeago').factory('nowTime', function($interval, timeAgo, timeAgoSettings) {
  var nowTime;

  function updateTime() {
    nowTime = Date.now();
  }
  updateTime();
  $interval(updateTime, timeAgoSettings.refreshMillis);

  return function() {
    return nowTime;
  };
});
