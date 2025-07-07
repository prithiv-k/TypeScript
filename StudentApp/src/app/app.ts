import { Component } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
