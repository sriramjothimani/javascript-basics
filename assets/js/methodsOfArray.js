// Concat

let numbers = [1, 2, 3];
numbers = numbers.concat(['a','b']);

console.log(numbers);

// Join

test = numbers.join('-');
console.log(test);

// Push

numbers.push(4);
console.log(numbers);


// Pop

console.log(numbers.pop());
console.log(numbers);

// Shift
numbers.shift();
console.log(numbers);

// Un-shift
numbers.unshift(0);
console.log(numbers);

// Slice
test1 = numbers.slice(1,2);
console.log(test1);

// Splice
test2 = numbers.splice(1,2,-1,-2);
console.log(test2);
console.log(numbers);

// Reverse
numbers.reverse();
console.log(numbers);

// Sort an array
let nums = [1,3,2,5,6,4,3,2];
console.log(nums.sort());

let students = [
    {
        name: 'a',
        marks: 20
    },
    {
        name: 'b',
        marks: 21
    },
    {
        name: 'c',
        marks: 5
    },
    {
        name: 'd',
        marks: 16
    },
    {
        name: 'e',
        marks: 23
    },
    {
        name: 'f',
        marks: 14
    },
    {
        name: 'g',
        marks: 17
    },
    {
        name: 'h',
        marks: 24
    },
    {
        name: 'i',
        marks: 25
    }
];

students.sort((a, b) => {
    if (a.marks > b.marks) return 1;
    if (a.marks < b.marks) return -1;

    return 0;
});

console.log(students);
