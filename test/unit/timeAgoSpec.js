/* jshint ignore:start */
'use strict';

var expect = chai.expect;

describe('timeAgo', function () {
  var elm, scope, filter, ngDateFilter, timeAgo, timeAgoSettings;

  // load the code
  beforeEach(module('yaru22.angular-timeago'));

  beforeEach(inject(function ($rootScope, $compile, timeAgoFilter, dateFilter, _timeAgo_, _timeAgoSettings_) {
    filter = timeAgoFilter;
    ngDateFilter = dateFilter;
    timeAgo = _timeAgo_;
    timeAgoSettings = _timeAgoSettings_;
  }));

  it('test filter', function () {
    var hourAgoIso8601 = ngDateFilter(new Date(Date.now() - 3600 * 1000), 'yyyy-MM-dd HH:mm');
    expect(filter(hourAgoIso8601)).to.equal('about an hour ago');
  });

  it('accept Date object', function () {
    var nowDate = new Date();
    var nowDateString = ngDateFilter(nowDate, 'yyyy-MM-dd HH:mm:ss');
    expect(filter(nowDate)).to.equal(filter(nowDateString));
  });

  it('settings.overrideLang works', function () {
    timeAgoSettings.overrideLang = 'es_LA';
    var strs = timeAgoSettings.strings['es_LA'];
    var nowDate = new Date();

    expect(filter(nowDate)).to.equal([strs.prefixAgo, strs.seconds, strs.suffixAgo].join(' ').trim());
  });

  it('settings.fullDateAfterSeconds works', function() {
    // force it to display the full date always
    timeAgoSettings.fullDateAfterSeconds = 0;
    var nowDate = new Date();

    var ngDateString = ngDateFilter(nowDate, 'yyyy-MM-dd HH:mm');
    var taDateString = filter(nowDate, 'yyyy-MM-dd HH:mm');

    expect(ngDateString).to.equal(taDateString);
  });

});
