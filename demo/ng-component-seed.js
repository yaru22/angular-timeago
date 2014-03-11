/**
 * Angular component (directive, filter, service, etc.) seed that is used to kickstart the implementation.
 * @version v0.2.0 - 2014-03-11
 * @link https://github.com/yaru22/ng-component-seed
 * @author Brian Park <yaru22@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
/**
 * This is an example directive taken from a tutorial at
 * http://www.adobe.com/devnet/html5/articles/angularjs-directives-and-the-computer-science-of-javascript.edu.html
 */
/* global angular */
'use strict';
// TODO: Make sure to rename the module.
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
      // edit mode boolean controls the visibilty of the blink and input
      scope.editMode = false;
      input.bind('blur', function () {
        scope.$apply(function () {
          scope.editMode = false;
          marquee.text(input.val());
        });
      });
      // called when the marquee tag is clicked
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