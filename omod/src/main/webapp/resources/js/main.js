
require.config({

    shim: {
        underscore2: {
            exports: '_2'
        },
        awesomeLib: {
            deps: [
                'underscore2',
                'jquery'
            ],
            exports: 'awesomeLib'
        }
    },

    paths: {
        underscore2: paths_config['xrayApp'] + '/lib/underscore/underscore',
        awesomeLib: paths_config['xrayApp'] + '/lib/awesomelib/awesomelib'
    }
});

require([
    'xrayApp/routers/router',
    'xrayApp/views/xray',
    'awesomeLib',
    'underscore2'
], function( Router, XrayView, awesomeLib, _2 ) {

    console.log(awesomeLib);
    console.log(_2);

//    console.log(_2.VERSION);
//    awesomeLib.hello();

    router = new Router();
});
