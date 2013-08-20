/* globals angular */
'use strict';

var app = angular.module('ngApp', [
  'namespace.component-name'
]);

app.controller('demoController', function($scope) {
  $scope.text1 = 'Bling bring bring';
  $scope.text2 = 'Hello world';
});
