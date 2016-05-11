'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['zh_CN'] = {
    wordSeparator: '',
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: '前',
    suffixFromNow: '后',
    seconds: '1分钟',
    minute: '1分钟',
    minutes: '%d分钟',
    hour: '1小时',
    hours: '%d小时',
    day: '1天',
    days: '%d天',
    month: '1个月',
    months: '%d个月',
    year: '1年',
    years: '%d年',
    numbers: []
  };
});
