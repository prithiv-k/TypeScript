import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentFeedback } from './student-feedback';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  feedback: StudentFeedback = {
    studentName: '',
    courseName: '',
    rating: 1,
    comments: ''
  };

  courses: string[] = ['Angular', 'React', 'Vue', 'JavaScript'];
}
