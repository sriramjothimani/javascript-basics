// A basic class creation
function struct(name, yearOfBirth, sex) {

    // Private method
    function calculateAge(yearOfBirth) {
        var currentYear = 2020;
        return currentYear - yearOfBirth;
    }

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.sex = sex;
    this.age = calculateAge(yearOfBirth);

}

// Print the prototype property of struct
// It has a constructor
// And __proto__ (actually prototype, chrome refers it as __proto__)
// The __proto__ property is inherited from Object super class of Javascript
// It has all the inheritable methods exposed by Object super class
console.log(struct.prototype);

// Lets add a method to struct in two different places

// 1. Add the method to class directly
struct.privateMethod = function () {
    console.log('private method');
};

// 2. Add the method to the prototype
struct.prototype.inheritableMethod = function () {
    console.log('inheritable method');
};

console.log(struct.privateMethod());
console.log(struct.prototype.inheritableMethod());

// The difference between these two is crucial

// Lets start creating objects

var obj = new struct('sriram', 1990, 'M');
console.log(obj);
console.log(obj.age);

console.log('The objects do not have visibility of the private methods, and this will result in : ', obj.privateMethod);
console.log('rather, it can access the prototype methods, ', obj.inheritableMethod());

// Unlike in other languages, this refers to the execution context

// The call method calls an other function by passing the current context
// and all the required attributes for that method
function person(phoneNum, name, yearOfBirth, sex) {
    struct.call(this, name, yearOfBirth, sex);

    this.phoneNum = phoneNum;
}

// The apply method and call are same where apply takes an array of
// arguments
function student(classId, name, yearOfBirth, sex) {
    struct.apply(this, [name, yearOfBirth, sex]);

    this.classId = classId;
}

// So what is a class then

// Class is an alternative or simpler syntax introduced in ES6 to replace the
// complex prototypical inheritance syntax

class _struct {
    static a = 10;
    b = 10;
    constructor(name, yearOfBirth, sex) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.sex = sex;
        this.age = this.calculateAge(this.yearOfBirth);
    }

    calculateAge(yearOfBirth) {
        var currentYear = 2020;
        return currentYear - yearOfBirth;
    };
}

let sample = new _struct('sriram', 1984, 'm');
console.log('static field,', _struct.a);
console.log('Final sample:',sample);

// Inheritance simplified

class _person extends _struct {
    constructor(phone, name, yearOfBirth, sex) {
        super(name, yearOfBirth, sex);
        this.phone = phone;
    }
}

let samplePerson = new _person('97514', 'sriram', 1984, 'm');
console.log('sample person,',samplePerson);

