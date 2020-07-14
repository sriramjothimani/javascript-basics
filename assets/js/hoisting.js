(function() {
    // Variable Hoisting
    try {
        console.log(var_hoisted);
        // variable declaration will be hoisted but the definition
        // does not happen
        var_hoisted = 10;
    } catch (e) {
        // Fails for undefined
        console.log(e);
    }

    // Variable declaration, usage and then definition
    try {
        var_a;
        console.log(var_a);
        var_a = 10;
    } catch (e) {
        // Fails for undefined
        console.log(e);
    }

    function hoist() {
        // Variable declaration, definition and usage
        a = 10;
        var b = 10;
    }
    hoist();
    console.log(a);

    // Function hoisting

    hoist_function();

    function hoist_function() {
        console.log('Function hoisted to be called prior');
    }

    // Function expression

    try {
        hoisting_with_function_expression();

        // It fails because only the variable declaration is
        // hoisted and the definition is not
        // In this case the definition is a function
        var expression = function hoist_expression_function() {
            console.log('Function Hoisting');
        }
    } catch (e) {
        // This fails as expected for missing definition.
        console.log(e);
    }

})();
