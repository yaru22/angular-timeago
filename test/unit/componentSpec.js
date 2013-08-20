/* globals angular, beforeEach, chai, describe, inject, it */
'use strict';

var expect = chai.expect;

describe('blink', function() {
  var elm, scope;

  // load the code
  beforeEach(module('namespace.component-name'));

  // load the template
  beforeEach(module('blink.tmpl'));

  beforeEach(inject(function($rootScope, $compile) {
    // we might move this tpl into an html file as well...
    elm = angular.element('<blink>Hello world</blink>');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));


  it('should create a marquee element', inject(function() {
    var marquee = elm.find('marquee');

    expect(marquee).to.have.length(1);
    expect(marquee.eq(0).text()).to.equal('Hello world');
  }));
});
