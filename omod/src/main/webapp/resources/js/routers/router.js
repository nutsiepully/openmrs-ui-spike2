
define([
    'jquery',
    'underscore',
    'backbone',
    'xrayApp/collections/xrays',
    'xrayApp/views/xray'
], function( $, _, Backbone, xrayCollection, XrayView ) {

    var AppRouter = Backbone.Router.extend({

        routes: {
            'xrayApp/xray': "xray",
            '*path': "xray"
        },

        xray: function() {
            new XrayView( {collection: xrayCollection} )
        }

    });

    return AppRouter;

});
