
console.log(paths_config);
console.log(paths_config['xrayApp'] + '/lib/underscore/underscore');
console.log(paths_config['xrayApp'] + '/lib/awesomelib/awesomelib');

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
        },
        handlebars: {
            exports: 'handlebars'
        }
    },

    paths: {
        underscore2: paths_config['xrayApp'] + '/lib/underscore/underscore',
        awesomeLib: paths_config['xrayApp'] + '/lib/awesomelib/awesomelib',
        handlebars: paths_config['xrayApp'] + '/lib/handlebars/handlebars'
    }
});

require([
    'xrayApp/routers/router',
    'xrayApp/views/xray',
    'awesomeLib',
    'underscore2',
    'handlebars'
], function( Router, XrayView, awesomeLib, _2, handlebars ) {

    console.log(awesomeLib);
    console.log(_2);
    console.log(handlebars);

//    console.log(_2.VERSION);
//    awesomeLib.hello();

    router = new Router();
});
