// Direct assignment

var test1_da = {};

test1_da.a = 10;

test1_da.test = function () {
    test1_da.a = test1_da.a * 10;
    console.log("From Test1.js: " + test1_da.a)
};

// Object literal notation

var test1_ol = {
    a: 10,

    test: function () {
        this.a = this.a * 10;
        console.log("From Test1.js: " + this.a);
    }
};

// Module pattern

var test1_mp = (function () {

    var a = 10;

    return {
        test: function () {
            a = a * 10;
            console.log("From Test1.js: " + a);
        }
    }
})();

// Dynamic name spacing

var test1_dns = {};

(function (context) {

    var a = 10;

    context.test = function () {
        a = a * 10;
        console.log("From Test1.js: " + a);
    }

})(test1_dns);

// this as namespace proxy

var test1_this = {};

(function (context) {

    var a = 10;

    context.test = function () {
        a = a * 10;
        console.log("From Test1.js: " + a);
    }

})(this.test1_this);

// Apply function

var test1_apply = {};

(function () {

    var a = 10;

    this.test = function () {
        a = a * 10;
        console.log("From Test1.js: " + a);
    }

}).apply(test1_apply);

// Call function

var test1_call = {};

