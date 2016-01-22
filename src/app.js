/**
 * Created by patrick on 19.01.16.
 */
'use strict';

var appName = 'sample-angular';

var angular = require('angular');
require('mi-angular-resource-builder');
require('angular-resource');
require('angular-ui-router');

var requires = [
    'mi.ResourceBuilder',
    'ngResource',
    'ui.router',
    require('./shared').name,
    require('./components').name
];

angular.module(appName, requires);

angular.bootstrap(document, [appName]);