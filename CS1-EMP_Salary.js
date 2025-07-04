var Department;
(function (Department) {
    Department["HR"] = "HR";
    Department["IT"] = "IT";
    Department["Sales"] = "Sales";
})(Department || (Department = {}));
var SalaryManager = /** @class */ (function () {
    function SalaryManager() {
    }
    SalaryManager.getBonusPercentage = function (department) {
        switch (department) {
            case Department.HR:
                return 0.10;
            case Department.IT:
                return 0.15;
            case Department.Sales:
                return 0.12;
            default:
                return 0;
        }
    };
    SalaryManager.categorize = function (netSalary) {
        if (netSalary >= 80000)
            return "High Earner";
        if (netSalary >= 50000)
            return "Mid Earner";
        return "Low Earner";
    };
    SalaryManager.processEmployees = function (employees) {
        for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
            var emp = employees_1[_i];
            var bonus = emp.baseSalary * this.getBonusPercentage(emp.department);
            var netSalary = emp.baseSalary + bonus;
            var category = this.categorize(netSalary);
            console.log("Employee Name: ".concat(emp.name));
            console.log("Age: ".concat(emp.age));
            console.log("Department: ".concat(emp.department));
            console.log("Base Salary: \u20B9".concat(emp.baseSalary));
            console.log("Net Salary (with bonus): \u20B9".concat(netSalary));
            console.log("Category: ".concat(category));
            console.log('------------------------');
        }
    };
    return SalaryManager;
}());
// Sample employee data
var employeeList = [
    { name: "Ravi", age: 28, department: Department.IT, baseSalary: 60000 },
    { name: "Priya", age: 32, department: Department.HR, baseSalary: 48000 },
    { name: "Arjun", age: 26, department: Department.Sales, baseSalary: 85000 }
];
// Run the salary processing
SalaryManager.processEmployees(employeeList);
