'use strict';

angular.module('yaru22.angular-timeago').directive('timeAgo', function(timeAgo, nowTime) {
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
});
