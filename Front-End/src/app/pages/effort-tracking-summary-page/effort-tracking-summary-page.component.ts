import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf and *ngFor

@Component({
  selector: 'app-effort-tracking-summary-page',
  templateUrl: './effort-tracking-summary-page.component.html',
  styleUrl: './effort-tracking-summary-page.component.css',
  standalone: true,
  imports: [RouterModule, CommonModule] // Add CommonModule here
})
export class EffortTrackingSummaryPageComponent implements OnInit {
  projectId: string | null = null; // To store the current project ID
  effortTrackingData: any[] = []; // To store the filtered effort tracking data

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('Project ID from route:', this.projectId); // Log the project ID
    if (this.projectId) {
      this.fetchAllEffortTrackingData(); // Fetch and filter effort tracking data
    }
  }

  fetchAllEffortTrackingData(): void {
    console.log(`Fetching all effort tracking data for Project ID: ${this.projectId}`); // Log the project ID

    this.http.get<any[]>(`http://localhost:8080/api/project-efforts/all`).subscribe({
      next: (data: any[]) => {
        console.log('All Effort Tracking API Response:', data); // Log the API response
        // Filter effort tracking data by project ID
        this.effortTrackingData = data.filter(effort => effort.project.id === Number(this.projectId));
        console.log('Filtered Effort Tracking Data:', this.effortTrackingData); // Log the filtered data
      },
      error: (err) => {
        console.error('Error fetching effort tracking data:', err); // Log any errors
      }
    });
  }

  // Add the getTotal method to calculate totals for each category
  getTotal(field: string): number {
    return this.effortTrackingData.reduce((total, effort) => total + (effort[field] || 0), 0);
  }
}
