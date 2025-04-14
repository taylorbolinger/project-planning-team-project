import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // Add RouterModule here
})
export class DashboardComponent {
  projects: any[] = []; // Array to store the fetched projects

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    const headers = {
      Authorization: 'Basic ' + btoa('user:password') // Base64-encoded username:password
    };
  
    this.http.get<any[]>('http://localhost:8080/api/projects/all', { headers }).subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (err) => {
        console.error('Error fetching projects:', err);
      }
    });
  }
}
