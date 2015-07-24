/* globals angular */
'use strict';

var app = angular.module('ngApp', [
  'yaru22.angular-timeago'
]);

app.controller('demoController', function ($scope, timeAgo, nowTime) {

  //timeAgo.settings.fullDateAfterSeconds = 60 * 60 * 24;
  //timeAgo.settings.overrideLang = 'es_LA';

  $scope.pageLoadTime = (new Date()).toISOString();
  $scope.nowTime = nowTime;
  $scope.nowTimeAsDateObject = new Date();
});
