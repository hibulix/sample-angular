'use strict';

module.export = require('angular')
    .module('shared', [])
    .config(['ResourceBuilderProvider', function (ResourceBuilderProvider) {
        var resources = require('./resource/index');
        ResourceBuilderProvider.addResource(resources);
    }])
;
