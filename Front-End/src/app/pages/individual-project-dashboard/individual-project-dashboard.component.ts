import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-individual-project-dashboard',
  templateUrl: './individual-project-dashboard.component.html',
  styleUrls: ['./individual-project-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Add CommonModule and RouterModule
})
export class IndividualProjectDashboardComponent implements OnInit {
  projectId: string | null = null;
  projectDetails: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    this.projectId = this.route.snapshot.paramMap.get('id');
    if (this.projectId) {
      this.fetchProjectDetails(this.projectId);
    }
  }

  fetchProjectDetails(id: string): void {
    this.http.get(`http://localhost:8080/api/projects/${id}`).subscribe({
      next: (data) => {
        this.projectDetails = data; // Assign the fetched project details
        console.log('Project Details:', this.projectDetails);
      },
      error: (err) => {
        console.error('Error fetching project details:', err);
      }
    });
  }

  navigateToProjectDetails(projectId: string): void {
    console.log('Navigating to Project Details with ID:', projectId);
    this.router.navigate(['/project-details-page', projectId]);
  }
}
