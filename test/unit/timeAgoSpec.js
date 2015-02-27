/* jshint ignore:start */
'use strict';

var expect = chai.expect;

describe('timeAgo', function () {
  var elm, scope, filter, ngDateFilter;

  // load the code
  beforeEach(module('yaru22.angular-timeago'));

  beforeEach(inject(function ($rootScope, $compile, timeAgoFilter, dateFilter) {
    filter = timeAgoFilter;
    ngDateFilter = dateFilter;
  }));

  it('test filter', function () {
    var hourAgoIso8601 = ngDateFilter(new Date(Date.now() - 3600 * 1000), 'yyyy-MM-dd HH:mm');
    expect(filter(hourAgoIso8601)).to.equal('about an hour ago');
  });

  it('accept Date object', function () {
    var nowDate = new Date();
    var nowDateString = ngDateFilter(nowDate, 'yyyy-MM-dd HH:mm');
    expect(filter(nowDate)).to.equal(filter(nowDateString));

  })
});
