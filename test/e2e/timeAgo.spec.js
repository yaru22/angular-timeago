'use strict';

describe('basic frontend testing', function () {

  var deltaMs = 200;

  beforeEach(function () {
    browser.get('/');
  });

  it('time ago directive', function () {
    expect(element(by.css('.directive-example')).getText()).toMatch(/^(Directive Example\nYou opened this demo page )(less than|about)( a minute ago)$/);
  });

  it('loading time', function () {
    var testStartTime = Date.now();
    element(by.css('.loading-time')).getText().then(function (loadingTimeText) {
      var pageLoadingTimestamp = loadingTimeText.replace('Page load time: ', '');
      var pageLoadtimeMs = new Date(pageLoadingTimestamp).getTime();
      expect(Math.abs(pageLoadtimeMs - testStartTime) < deltaMs).toBe(true);
    })
  });

  it('current time is changing', function () {
    browser.sleep(1000);
    element(by.css('.current-time')).getText().then(function (pageNowTimeText) {
      var pageNowMs = parseInt(pageNowTimeText.replace('Current time: ', ''));
      expect(Math.abs(pageNowMs - Date.now()) < deltaMs).toBe(true)
    })
  });

});


