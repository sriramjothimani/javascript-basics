function add(var1, var2) {
    return var1 + var2;
}

function sub(var1, var2) {
    return var1 - var2;
}

function multiply(var1, var2) {
    return var1*var2;
}

function divide(var1, var2) {
    if (var2 === 0) {
        return null;
    }

    return var1/var2;
}

export {add, sub, divide, multiply};
