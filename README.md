# angular-timeago [![Analytics](https://ga-beacon.appspot.com/UA-2694988-7/angular-timeago/readme?pixel)](https://github.com/yaru22/angular-timeago)
Angular directive/filter/service for formatting date so that it displays how long ago the given time was compared to now.

##<a name="disclaimer"/> Disclaimer
This project is based off of [a thread](https://groups.google.com/forum/#!topic/angular/o7vl4tsg53w) on Angular Google Groups. The person who started the thread, [@lrlopez](https://github.com/lrlopez), gave me permission to start a repo using the code he wrote initially. Thanks to [@lrlopez](https://github.com/lrlopez) and other contributors in the thread.

##<a name="demo"/> Demo
Check out the demo [here](http://www.brianpark.ca/projects/angular_timeago/demo/).

##<a name="usage"/> Usage
**Install via Bower**
```
bower install --save angular-timeago
```
**Reference in module**
```js
var app = angular.module('ngApp', [
  'yaru22.angular-timeago'
]);
```
###<a name="filter"/> Filter  
####<a name="filter-basic"/>Basic Filter  
```
{{myDate | timeAgo}}
```
Displays time ago since `myDate`. `myDate` can be time in **milliseconds since January 1st 1970** (see [MDN Date.prototype.getTime](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)) or an **ISO 8601** string (see [MDN Date.prototype.toISOString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString))  

####<a name="filter-format"/>Filter using [Angular `date` format](https://docs.angularjs.org/api/ng/filter/date)  
```  
{{myDate | timeAgo:'MM/dd/yyyy'}}
```  
The format filter will only take effect if you've configured the service to display the full date after a certain number of seconds using the [fullDateAfterSeconds](#config-fulldate) setting.  In this scenario, it will use the Angular `date` filter with this format string.  

###<a name="directive"/>Directive
####<a name="directive-basic"/>Basic Directive  
```html  
<p>You were born <time-ago from-time='{{ birthDate }}'></time-ago></p>
```

####<a name="directive-format"/>Directive using [Angular `date` format](https://docs.angularjs.org/api/ng/filter/date)  
```html
<p>You were born <time-ago from-time='{{ birthDate }}' format='MM/dd/yyyy'></time-ago></p>
```

###<a name="config"/>Configuration Settings
timeAgo has several configurable settings to tweak the default behavior.  

```javascript
angular.config(function (timeAgoSettings) {
    timeAgoSettings.<setting> = <value>;
});
```

####<a name="config-future"/>`allowFuture`  
Default: `false`
```javascript
timeAgoSettings.allowFuture = true;
```
This will allow timeAgo to format dates in the future as well. e.g. "2 hours from now"

####<a name="config-override"/>`overrideLang`  
Default: `null`
```html
<html lang='en_US'>
...
```
```javascript
// even though the page's setting is 'en_US', timeAgo filtered
// dates will render in 'es_LA'
timeAgoSettings.overrideLang = 'es_LA';
```
See [Language Support](#lang) for languages this library supports. 

####<a name="config-fulldate"/>`fullDateAfterSeconds`  
Default: `null`
```javascript
// After 24 hours, display the date normally.
var oneDay = 60*60*24;
timeAgoSettings.fullDateAfterSeconds = oneDay;
```
This configures `timeAgo` to use it's own filters (`about a minute ago`, `about 4 hours ago`, etc) until `fullDateAfterSeconds` seconds have passed, and then it will display the date as normal.  This is useful when combined with a [date format filter](#filter-format).

####<a name="config-refreshMillis"/>`refreshMillis`
Default: `1000`
```javascript
timeAgoSettings.refreshMillis = 60000;
```
This configures `timeAgo` to use a different refresh interval (in milliseconds).
Note that this setting needs to be set early in the `run` function before the `nowTime` factory is used by a directive/filter/controller.

####<a name="config-breakpoints"/>`breakpoints`
Default:
```js
{
  secondsToMinute: 45, // in seconds
  secondsToMinutes: 90, // in seconds
  minutesToHour: 45, // in minutes
  minutesToHours: 90, // in minutes
  hoursToDay: 24, // in hours
  hoursToDays: 42, // in hours
  daysToMonth: 30, // in days
  daysToMonths: 45, // in days
  daysToYear: 365, // in days
  yearToYears: 1.5 // in year
}
```
This configure `timeAgo` at which points changing the string format.
For example, the default behavior will display `less than a minute ago`until 45 seconds, then it will display `about a minute`.

###<a name="lang"/>Language support
angular-timeago currently supports the following languages:  
`ca_ES`, `de_DE`, `en_US`, `es_LA`, `fr_FR`, `he_IL`, `hu_HU`, `it_IT`, `nl_NL`, `pl_PL`, `pt_BR`, `sv_SE`, `zh_CN`, `zh_TW`.

If you want more languages: feel free to contribute!
The language is determined by the string in `document.documentElement.lang` which you can set in your HTML markup:
```
<html lang="en_US"></html>
```
Or directly in JS:
```
window.document.documentElement.lang = 'en_US';
```
Or configure the service to override the default language:
```javascript  
angular.config(function (timeAgoSettings) {
  timeAgoSettings.overrideLang = 'es_LA';
});
```
You can also add additional or alter existing languages at runtime by extending the service:
```javascript  
angular.config(function (timeAgoSettings) {
  timeAgoSettings.strings.en_US = {
    // appropriate keys here
  };
});
```

If you want to add a new language to the open source project, please refer to section [Add a new language](#new-language).


##<a name="new-language"/>Add a new language

To add a new language if the one you want is missing :

- create a new file into the languages folder : src/languages/time-ago-language-xx_XX.js
- in that file, set your language definition as this :

```js
'use strict';

angular.module('yaru22.angular-timeago').config(function(timeAgoSettings) {
  timeAgoSettings.strings['xx_XX'] = {
    ... TODO =) ...
  }
});
```


## Language pickup

By adding many new language to the project, the library will get bigger and bigger overtime.
If you need only few languages, you may want no to embedded all the available languages.
So that, instead of linking to the full library like this :

```html
<script src="bower_components/angular-timeago/dist/angular-timeago.min.js"></script>
```

you may prefer to pickup only the languages you want :

```html
<script src="bower_components/angular-timeago/dist/angular-timeago-core.min.js"></script>
<script src="bower_components/angular-timeago/src/languages/time-ago-language-en_US.js"></script>
```

In that case, don't forget to concat your JS files into your own worklow.



## Testing

In order to run the e2e tests you might need to install a Selenium server via:

```
node ./node_modules/grunt-protractor-runner/scripts/webdriver-manager-update
```

And then use grunt to run all tests (unit and e2e):
