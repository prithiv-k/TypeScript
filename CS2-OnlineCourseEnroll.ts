enum CourseName {
    Angular = "Angular",
    NodeJS = "Node.js",
    FullStack = "FullStack"
}

interface Student {
    name: string;
    age: number;
    courseName: CourseName;
    knowsHTML: boolean;
}

class EnrollmentSystem {
    private static getCourseCategory(course: CourseName): string {
        switch (course) {
            case CourseName.Angular:
                return "Front-End";
            case CourseName.NodeJS:
                return "Back-End";
            case CourseName.FullStack:
                return "Full-Stack";
            default:
                return "Unknown";
        }
    }

    private static isEligible(student: Student): boolean {
        if (student.age < 18) return false;
        if (student.courseName === CourseName.Angular && !student.knowsHTML) return false;
        return true;
    }

    static processEnrollments(students: Student[]): void {
        for (const student of students) {
            const category = this.getCourseCategory(student.courseName);
            const eligible = this.isEligible(student) ? "Eligible" : "Not Eligible";

            console.log(`Student Name: ${student.name}`);
            console.log(`Age: ${student.age}`);
            console.log(`Course: ${student.courseName}`);
            console.log(`Knows HTML: ${student.knowsHTML}`);
            console.log(`Course Category: ${category}`);
            console.log(`Enrollment Status: ${eligible}`);
            console.log('------------------------');
        }
    }
}

// Sample student data
const students: Student[] = [
    { name: "Sneha", age: 20, courseName: CourseName.Angular, knowsHTML: true },
    { name: "Karan", age: 17, courseName: CourseName.NodeJS, knowsHTML: false },
    { name: "Riya", age: 22, courseName: CourseName.Angular, knowsHTML: false },
    { name: "Aman", age: 25, courseName: CourseName.FullStack, knowsHTML: true }
];

// Run the system
EnrollmentSystem.processEnrollments(students);
