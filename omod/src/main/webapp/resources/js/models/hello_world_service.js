
define([], function() {

    var HelloWordService = function() {

        this.say = function() {
            console.log("Hello, World!");
        };

    }

    return HelloWordService;
});
