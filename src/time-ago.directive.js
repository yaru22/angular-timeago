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
        fromTime = null;
        if (!!scope.fromTime) {
          fromTime = timeAgo.parse(scope.fromTime);
        }
      });

      // Track changes to time difference
      scope.$watch(function() {
        if (!!fromTime) {
          return nowTime() - fromTime;
        }
        return null;
      }, function(value) {
        var text = '';
        if (!!value) {
          text = timeAgo.inWords(value, fromTime, scope.format);
        }
        angular.element(elem).text(text);
      });
    }
  };
});
