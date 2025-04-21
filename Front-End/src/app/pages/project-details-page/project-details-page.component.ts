import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule] // Add required modules here
})
export class ProjectDetailsPageComponent implements OnInit {
  projectId: string | null = null;
  projectDetails: any = null; // Initialize as null to handle loading state
  projectMembers: any = null; // Add projectMembers property
  projectRisks: any = null; // Add projectRisks property

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id'); // Get the project ID from the route
    console.log('Project ID from route:', this.projectId); // Log the project ID
    if (this.projectId) {
      this.fetchProjectDetails(this.projectId);
    }
  }

  fetchProjectDetails(id: string): void {
    console.log(`Fetching project details for ID: ${id}`); // Log the ID
    this.http.get<any>(`http://localhost:8080/api/projects/${id}`).subscribe({
      next: (data: any) => {
        console.log('API Response:', data); // Log the API response
        this.projectDetails = data; // Assign the fetched project details

        // Ensure projectDetails is loaded before calling these methods
        if (this.projectDetails && this.projectDetails.id) {
          this.fetchAllProjectMembers(); // Fetch all members
          this.fetchAllProjectRisks(); // Fetch all risks
        } else {
          console.error('Project details are missing or invalid.');
        }
      },
      error: (err) => {
        console.error('Error fetching project details:', err); // Log any errors
      }
    });
  }

  fetchAllProjectMembers(): void {
    //console.log(`Fetching project members for Project ID: ${this.projectDetails.id}`); // Log the project ID

    this.http.get<any[]>(`http://localhost:8080/api/project-members`).subscribe({
      next: (data: any[]) => {
        //console.log('All Project Members API Response:', data); // Log the API response
        // Filter members by project.project.id
        this.projectMembers = data.filter(member => member.project.id === this.projectDetails.id);
        console.log('Filtered Project Members:', this.projectMembers); // Log the filtered members
      },
      error: (err) => {
        console.error('Error fetching project members:', err); // Log any errors
      }
    });
  }

  // fetchAllProjectRisks(): void {
  //   //console.log('Fetching all project risks'); // Log the action

  //   this.http.get<any[]>(`http://localhost:8080/api/project-risks`).subscribe({
  //     next: (data: any[]) => {
  //       //console.log('All Project Risks API Response:', data); // Log the API response
  //       // Filter risks by project.project.id
  //       this.projectRisks = data.filter(risk => risk.project.id === this.projectDetails.id);
  //       console.log('Filtered Project Risks:', this.projectRisks); // Log the filtered risks
  //     },
  //     error: (err) => {
  //       console.error('Error fetching project risks:', err); // Log any errors
  //     }
  //   });
  // }
}