/* globals angular */
'use strict';

var app = angular.module('ngApp', [
  'yaru22.angular-timeago'
]);

app.controller('demoController', function ($scope, nowTime) {
  $scope.pageLoadTime = (new Date()).toISOString();
  $scope.nowTime = nowTime;
  $scope.nowTimeAsDateObejct = new Date()
});
