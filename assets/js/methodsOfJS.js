var employee = {
    salaryPerDay:4000,
    age:35,
    name:"sriramkumar",
};

var salary = {};

(function (context) {

    context.monthlySalary = function(noOfDays) {
        return this.salaryPerDay * noOfDays;
    }
})(salary);

var payday = salary.monthlySalary.bind(employee);
console.log(salary.monthlySalary.call(employee, 20));
console.log(salary.monthlySalary.apply(employee, [20]));
console.log(payday(20));


// The call method calls an other function by passing the current context
// and all the required attributed for that method
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
