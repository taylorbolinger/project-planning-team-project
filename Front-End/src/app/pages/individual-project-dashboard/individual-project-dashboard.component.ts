import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-individual-project-dashboard',
  template: `
    <header>
        <a [routerLink]="'/dashboard'" class="logo">
            <img src="assets/SoftwareXYZlogo.png" alt="SoftwareXYZ Logo">
        </a>
        <h1>Individual Project Dashboard</h1>
        <a [routerLink]="'/dashboard'" class="home-icon">
            <img src="assets/HomeIcon2.png" alt="Home Button" width="40" height="40">
        </a>
    </header>
    <main>
        <!-- Display project name and summary dynamically -->
        <h2 *ngIf="projectDetails">{{ projectDetails.name }}</h2>
        <p *ngIf="projectDetails">{{ projectDetails.description }}</p>

        <div class="buttons">
            <a class="btn-card" [routerLink]="'/project-details-page'">Project Details</a>
            <a class="btn-card" [routerLink]="'/requirements-page'">Project Requirements</a>
            <a class="btn-card" [routerLink]="'/effort-tracking-summary-page'">Effort Tracking & Summary</a>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  `,
  styleUrls: ['./individual-project-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Add CommonModule and RouterModule
})
export class IndividualProjectDashboardComponent {
  projectId: string | null = null;
  projectDetails: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    if (this.projectId) {
      this.fetchProjectDetails(this.projectId);
    }
  }

  fetchProjectDetails(id: string): void {
    this.http.get(`http://localhost:8080/api/projects/${id}`).subscribe({
      next: (data) => {
        this.projectDetails = data;
      },
      error: (err) => {
        console.error('Error fetching project details:', err);
      }
    });
  }
}
