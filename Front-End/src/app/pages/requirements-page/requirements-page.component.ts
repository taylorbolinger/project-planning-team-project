import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf and *ngFor
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink

@Component({
  selector: 'app-requirements-page',
  templateUrl: './requirements-page.component.html',
  styleUrls: ['./requirements-page.component.css'],
  standalone: true, // Ensure this is a standalone component
  imports: [CommonModule, RouterModule] // Add required modules here
})
export class RequirementsPageComponent implements OnInit {
  projectId: string | null = null;
  projectDetails: any = null; // To store the fetched project details
  requirements: any[] = []; // To store the filtered requirements
  functionalRequirements: any[] = []; // To store functional requirements
  nonFunctionalRequirements: any[] = []; // To store non-functional requirements

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('Project ID from route:', this.projectId); // Log the project ID
    if (this.projectId) {
      this.fetchProjectDetails(this.projectId);
      this.fetchAllRequirements(); // Fetch and filter requirements
    }
  }

  fetchProjectDetails(id: string): void {
    this.http.get(`http://localhost:8080/api/projects/${id}`).subscribe({
      next: (data) => {
        console.log('Fetched Project Details:', data); // Log the fetched data
        this.projectDetails = data; // Assign the fetched project details
      },
      error: (err) => {
        console.error('Error fetching project details:', err); // Log any errors
      }
    });
  }

  fetchAllRequirements(): void {
    console.log(`Fetching all requirements for Project id ${this.projectId}`); // Log the project ID

    this.http.get<any[]>(`http://localhost:8080/api/project-requirements`).subscribe({
      next: (data: any[]) => {
        console.log('All Requirements API Response:', data); // Log the API response
        // Convert projectId to a number for comparison
        const projectIdNumber = Number(this.projectId);

        // Filter requirements by project ID
        const filteredRequirements = data.filter(requirement => requirement.project.id === projectIdNumber);

        // Split requirements into functional and non-functional
        this.functionalRequirements = filteredRequirements.filter(req => req.type === 0);
        this.nonFunctionalRequirements = filteredRequirements.filter(req => req.type === 1);

        console.log('Functional Requirements:', this.functionalRequirements); // Log functional requirements
        console.log('Non-Functional Requirements:', this.nonFunctionalRequirements); // Log non-functional requirements
      },
      error: (err) => {
        console.error('Error fetching requirements:', err); // Log any errors
      }
    });
  }
}
