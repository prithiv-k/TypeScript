import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngIf, *ngFor, ngClass, ngStyle
import { Student } from './student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [
    { name: 'Alice', marks: 75, isActive: true },
    { name: 'Bob', marks: 45, isActive: false },
    { name: 'Charlie', marks: 88, isActive: true },
    { name: 'David', marks: 30, isActive: false }
  ];
}
