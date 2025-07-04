var CourseName;
(function (CourseName) {
    CourseName["Angular"] = "Angular";
    CourseName["NodeJS"] = "Node.js";
    CourseName["FullStack"] = "FullStack";
})(CourseName || (CourseName = {}));
var EnrollmentSystem = /** @class */ (function () {
    function EnrollmentSystem() {
    }
    EnrollmentSystem.getCourseCategory = function (course) {
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
    };
    EnrollmentSystem.isEligible = function (student) {
        if (student.age < 18)
            return false;
        if (student.courseName === CourseName.Angular && !student.knowsHTML)
            return false;
        return true;
    };
    EnrollmentSystem.processEnrollments = function (students) {
        for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
            var student = students_1[_i];
            var category = this.getCourseCategory(student.courseName);
            var eligible = this.isEligible(student) ? "Eligible" : "Not Eligible";
            console.log("Student Name: ".concat(student.name));
            console.log("Age: ".concat(student.age));
            console.log("Course: ".concat(student.courseName));
            console.log("Knows HTML: ".concat(student.knowsHTML));
            console.log("Course Category: ".concat(category));
            console.log("Enrollment Status: ".concat(eligible));
            console.log('------------------------');
        }
    };
    return EnrollmentSystem;
}());
// Sample student data
var students = [
    { name: "Sneha", age: 20, courseName: CourseName.Angular, knowsHTML: true },
    { name: "Karan", age: 17, courseName: CourseName.NodeJS, knowsHTML: false },
    { name: "Riya", age: 22, courseName: CourseName.Angular, knowsHTML: false },
    { name: "Aman", age: 25, courseName: CourseName.FullStack, knowsHTML: true }
];
// Run the system
EnrollmentSystem.processEnrollments(students);
