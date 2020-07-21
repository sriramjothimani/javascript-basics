// Concat

let numbers = [1, 2, 3];
numbers = numbers.concat(['a','b']);

console.log('Concat :',numbers);

// Join

test = numbers.join('-');
console.log('Join :',test);

// Push

numbers.push(4);
console.log('Push :',numbers);


// Pop

console.log(numbers.pop());
console.log('Pop :',numbers);

// Shift
numbers.shift();
console.log('Shift :', numbers);

// Un-shift
numbers.unshift(0);
console.log('Unshift :',numbers);

// Slice
test1 = numbers.slice(1,2);
console.log('Slice :', test1);

// Splice
test2 = numbers.splice(1,2,-1,-2);
console.log('Splice :', test2);
console.log('Spliced array :', numbers);

// Reverse
numbers.reverse();
console.log('Reverse :', numbers);

// Sort an array
let nums = [1,3,2,5,6,4,3,2];
console.log('Sort :' ,nums.sort());

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

console.log('Sort with compare :',students);

// Reduce

const studentsArray = [{
        name: 'a',
        marks: 10,
        class: 'I'
    },{
        name: 'b',
        marks: 15,
        class: 'J'
    },{
        name: 'c',
        marks: 16,
        class: 'I'
    },{
        name: 'd',
        marks: 12,
        class: 'J'
    },{
        name: 'e',
        marks: 13,
        class: 'I'
    },{
        name: 'f',
        marks: 10,
        class: 'J'
    }];

let iSectionStuds = [];

function accumulator(iSectionStuds, student) {
    console.log('1:',iSectionStuds);
    console.log('2:',student);
    if (student.class === 'I' && student.marks > 10) {
        iSectionStuds.push(student);
    }
    return iSectionStuds;
}

iSectionStuds = studentsArray.reduce(accumulator, []);

console.log('Students of I with marks > 10,',iSectionStuds);


