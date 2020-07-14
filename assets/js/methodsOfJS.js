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
