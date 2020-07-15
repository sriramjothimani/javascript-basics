// One common mantra : Only Declarations are hoisted
// Variable Hoisting
(function() {

    try {
        console.log(global_variable);
    } catch (e) {
        console.log('This isn\'t hoisting!!!');
        console.log('We are trying to access something that is totally unavailable yet:', e);
    }

    console.log('Even a variable is defined only the declaration is hoisted:', variable_hoisted);

    var no_hoisting_involved;
    console.log('Variable declared but later defined, fails with undefined error:', no_hoisting_involved);


    global_variable = 10;
    var variable_hoisted = 10;
    no_hoisting_involved = 10;
})();

console.log('We are able to access the global_variable even out of the function scope:', global_variable);

// Function Hoisting
(function() {

    global_method();
    console.log('Note the function declaration is hoisted');

    try {
        function_expression();
    } catch (e) {
        console.log('This function call fails,', e);
        console.log('Because only the variable declaration is hoisted and the runtime does not know that it is a function yet')
    }
    console.log('Being a variable it is hoisted and upon printing it says:',function_expression);

    function global_method() {
        console.log('Global Method declared after its usage works fine');
    }
    var function_expression = function() {
        console.log('Function expression');
    }

})();

// Class Hoisting
(function() {

    try {
        console.log(new hoisted(true));
    } catch (e) {
        console.log('It fails with, ', e);
        console.log('It\'s an ambiguous case, as per the error its a reference error which basically means runtime could not identify the reference');
        console.log('At the sametime it says, cannot be accessed until it is initialized')
    }

    try {
        console.log(new hoisted_unkonwn(true));
    } catch (e) {
        console.log('It fails with, ', e);
        console.log('Here we are trying to access something that is not at all existing');
    }

    console.log('Here this returns undefined like a variable, and it gets hoisted as explained in first closure');
    console.log(class_assignment);

    try{
        console.log(new class_assignment(true));
    } catch(e) {
        console.log('This fails because we are trying to access a variable whose type is still not initialized,',e);
    }

    class hoisted {
        constructor(isHoisted) {
            this.isHoisted = false;
        }
    }

    var class_assignment = class hoist {
        constructor(isHoisted) {
            this.isHoisted = false;
        }
    }
})();
