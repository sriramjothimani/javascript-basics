// Function and Lexical environment
// https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda
function closureFunction(value) {
    var outerScope = value; // Global scope or the lexical environment
    function lexicalFunction() {
        console.log(outerScope);
    }

    return lexicalFunction;
}

var lexicalScope_A = closureFunction('Lexical Env A');
var lexicalScope_B = closureFunction('Lexical Env B');
// Here _A and _B holds different lexical environments
lexicalScope_A();
lexicalScope_B();

// Private methods

var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    // Private methods
    return {
        increment: function(val) {
            changeBy(val * 1);
        },

        decrement: function(val) {
            changeBy(val * -1);
        },

        init: function(initValue) {
            privateCounter = initValue;
        },

        value: function () {
            return privateCounter;
        }
    }
})();

counter.init(10);
console.log('will be an undefined leaving us restricting from accessing the private variables ', counter.privateCounter);
console.log('Initialise counter and access one of the private method - ', counter.value());
counter.increment(2);
counter.increment(5);
counter.decrement(3);
console.log('Increment ', counter.value());

// Closure scope chain

var a =10;
var closureChain = (function () {
    return {
        aplusbwholesquare: function (a) {
            return function(b) {
                return a*a + b*b + 2*a*b;
            }
        }
    }
})();

var a = 2, b = 3;

console.log(a, ' + ',b,' whole square',closureChain.aplusbwholesquare(2)(3));
