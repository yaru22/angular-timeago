'use strict';

describe('basic frontend testing', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('time ago directive', function () {
    expect(element(by.css('.directive-example')).getText()).toMatch(/^(Directive Example\nYou opened this demo page )(less than|about)( a minute ago)$/);
  });

});


