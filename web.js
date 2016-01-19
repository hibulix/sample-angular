/**
 * Created by patrick on 19.01.16.
 */
var express = require('express');
var serve = express();

serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 9876));
serve.listen(serve.get('port'), function () {
    console.log('Node app of sample-angular is running at localhost:' + serve.get('port'));
});