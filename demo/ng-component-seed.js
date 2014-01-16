'use strict';
var component = angular.module('namespace.component-name', ['namespace.component-name.tmpls']);
component.directive('blink', function () {
  return {
    restrict: 'E,A',
    transclude: true,
    templateUrl: 'template/blink.tmpl',
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
angular.module('namespace.component-name.tmpls', []).run([
  '$templateCache',
  function ($templateCache) {
    'use strict';
    $templateCache.put('template/blink.tmpl', '<div><marquee ng-click=edit() ng-hide=editMode scrollamount=100% ng-transclude=""></marquee><input ng-show=editMode></div>');
  }
]);