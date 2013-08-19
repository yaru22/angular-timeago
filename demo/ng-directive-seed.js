'use strict';
angular.module('ng-directive-seed', []).directive('blink', function () {
  return {
    restrict: 'E,A',
    transclude: true,
    templateUrl: 'blink.tmpl',
    scope: {},
    link: function (scope, element) {
      var marquee = element.find('marquee');
      var input = element.find('input');
      scope.editMode = false;
      input.bind('blur', function () {
        scope.$apply(function () {
          scope.editMode = false;
          marquee.text(input.val());
        });
      });
      scope.edit = function () {
        scope.editMode = true;
        input.val(marquee.text());
      };
    }
  };
});