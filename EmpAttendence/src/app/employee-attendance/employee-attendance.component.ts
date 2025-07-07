import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from './employee';



@Component({
  selector: 'app-employee-attendance',
  standalone: true, // ✅ Required!
  imports: [CommonModule],
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})

export class EmployeeAttendanceComponent {
  employees: Employee[] = [
    { name: 'Alice', department: 'IT', isPresent: true, workFromHome: false },
    { name: 'Bob', department: 'HR', isPresent: false, workFromHome: true },
    { name: 'Charlie', department: 'Sales', isPresent: false, workFromHome: false }
  ];
}
