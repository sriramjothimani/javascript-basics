// Reverse

function reverseByReduce(inputStr) {
    let charArray = inputStr.split('');
    let len = charArray.length;
    let reverCharArray = charArray.reduce(function(accumulator, chr) {
        accumulator.unshift(chr);
        return accumulator;
    }, []);

    return reverCharArray.join('');
}


console.log('String reverse by reduce,',reverseByReduce('teststring'));


