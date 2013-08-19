/* global angular */

'use strict';

// Tutorial from http://www.adobe.com/devnet/html5/articles/angularjs-directives-and-the-computer-science-of-javascript.edu.html
angular.module('ng-directive-seed', [])
    .directive('blink', function() {
      return {
        restrict: 'E,A',
        transclude: true,
        templateUrl: 'blink.tmpl',
        scope: {},
        link: function(scope, element) {
          var marquee = element.find('marquee');
          var input = element.find('input');

          // edit mode boolean controls the visibilty of the blink and input
          scope.editMode = false;

          input.bind('blur', function() {
            scope.$apply(function() {
              scope.editMode = false;
              marquee.text(input.val());
            });
          });

          // called when the marquee tag is clicked
          scope.edit = function() {
            scope.editMode = true;
            input.val(marquee.text());
          };
        }
      };
    });
