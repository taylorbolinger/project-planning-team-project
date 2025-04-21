import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-new-project',
  imports: [RouterModule, ReactiveFormsModule], // Import ReactiveFormsModule
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css',
  standalone: true,
})
export class NewProjectComponent {
  projectForm: FormGroup; // Form for project details

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the form
    this.projectForm = this.fb.group({
      name: [''], // Project name
      description: [''], // Project description
      startDate: [''], // Start date
      endDate: [''], // End date
      status: [''], // Project status
    });
  }

  // Submit the form data
  onSubmit(): void {
    if (this.projectForm.valid) {
      const projectData = this.projectForm.value;
      console.log('Submitting project data:', projectData);

      // Send the data to the backend
      this.http.post('http://localhost:8080/api/projects', projectData).subscribe({
        next: (response) => {
          console.log('Project created successfully:', response);
          // Navigate to the dashboard or another page after successful submission
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Error creating project:', err);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }
}
