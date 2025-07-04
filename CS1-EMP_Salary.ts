enum Department {
    HR = "HR",
    IT = "IT",
    Sales = "Sales"
}

interface Employee {
    name: string;
    age: number;
    department: Department;
    baseSalary: number;
}

class SalaryManager {
    private static getBonusPercentage(department: Department): number {
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
    }

    private static categorize(netSalary: number): string {
        if (netSalary >= 80000) return "High Earner";
        if (netSalary >= 50000) return "Mid Earner";
        return "Low Earner";
    }

    static processEmployees(employees: Employee[]): void {
        for (const emp of employees) {
            const bonus = emp.baseSalary * this.getBonusPercentage(emp.department);
            const netSalary = emp.baseSalary + bonus;
            const category = this.categorize(netSalary);

            console.log(`Employee Name: ${emp.name}`);
            console.log(`Age: ${emp.age}`);
            console.log(`Department: ${emp.department}`);
            console.log(`Base Salary: ₹${emp.baseSalary}`);
            console.log(`Net Salary (with bonus): ₹${netSalary}`);
            console.log(`Category: ${category}`);
            console.log('------------------------');
        }
    }
}

// Sample employee data
const employeeList: Employee[] = [
    { name: "Ravi", age: 28, department: Department.IT, baseSalary: 60000 },
    { name: "Priya", age: 32, department: Department.HR, baseSalary: 48000 },
    { name: "Arjun", age: 26, department: Department.Sales, baseSalary: 85000 }
];

// Run the salary processing
SalaryManager.processEmployees(employeeList);
