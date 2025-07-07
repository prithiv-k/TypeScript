import { Component } from '@angular/core';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FeedbackFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
