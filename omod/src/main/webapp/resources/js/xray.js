
// target URL - http://localhost:8080/openmrs/moduleResources/spike1/js/main.js
// current URL - http://localhost:8080/openmrs/moduleResources/spike2/js/xray.js
// relative path to main - ../../spike1/js/main

require([
    '../../spike1/js/main'
], function (main) {

    // Ensure main.js is loaded which sets up the configuration.

    console.log(paths_config);
    console.log(paths_config['xrayApp'] + '/lib/underscore/underscore');
    console.log(paths_config['xrayApp'] + '/lib/awesomelib/awesomelib');

    // Set up extra config for this app and its libraries.

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
                exports:'handlebars'
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
    ], function (Router, XrayView, awesomeLib, _2, handlebars) {

        console.log(awesomeLib);
        console.log(_2);
        console.log(handlebars);

        var router = new Router();
        Backbone.history.start();
    });

});