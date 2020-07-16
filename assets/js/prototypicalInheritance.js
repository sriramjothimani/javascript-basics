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
