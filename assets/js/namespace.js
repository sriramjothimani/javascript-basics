// Direct assignment

var test_da = {};

test_da.a = 10;

test_da.test = function () {
    test_da.a = test_da.a * 12;
    console.log("From Test.js: " + test_da.a)
};

// object literal notation

var test_ol = {

    a: 10,

    test: function () {
        this.a = this.a * 12;
        console.log("From Test.js: " + this.a)
    },

    callBack : function (variable ,callbackRef) {
        console.log(variable);
        callbackRef();
    },

};

function test_test_ol() {

    this.test();
    this.callBack("test_od", function () {
        console.log("A callback method");
    });
}

var test_with_bind = test_test_ol.bind(test_ol);
test_with_bind();

// Module Pattern

var test_mp = (function () {

    var a = 10;

    return {
        test: function () {
            a = a * 10;
            console.log("From Test.js: " + a);
        },

        callbackMethod: function () {
            test_ol.callBack("test", function () {
                console.log(a);
            })
        }
    }
})();

var callerFunction = function () {

    var b = 20;

    test_ol.callBack("testcallback", function() {
        console.log(b)
    });
};


