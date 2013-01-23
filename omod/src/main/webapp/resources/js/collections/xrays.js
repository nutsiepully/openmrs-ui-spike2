
define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'xrayApp/models/xray'
], function( _, Backbone, Store, Xray ) {

    var XrayCollection = Backbone.Collection.extend({

        model: Xray,

        url: '/xrays',

        localStorage: new Store('xrays')
    });

    return new XrayCollection();
});
