
(function() {

    var root = this;

    this.AwesomeLib = function() {

    };

    this.AwesomeLib.hello = function() {
        console.log('inside hello awesome lib');
        console.log(_);
        console.log($);
        return 'Hello, World!'
    }

})();