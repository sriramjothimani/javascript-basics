function removeDupes(strArray) {
    const unqStrs = strArray.filter((str, ind,arRef) => arRef.indexOf(str) === ind);
    return unqStrs;
}

function idenfityDupes(strArray) {
    const unqStrs = strArray.filter((str, ind,arRef) => arRef.indexOf(str) !== ind);
    return unqStrs;
}

const strArray = ['a','b','c','a','d'];

console.log('Remove Dupe,',removeDupes(strArray));
console.log('Identify Dupe,',idenfityDupes(strArray));
