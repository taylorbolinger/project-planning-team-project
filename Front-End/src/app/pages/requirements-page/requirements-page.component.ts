import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { Router } from 'express';

@Component({
  selector: 'app-requirements-page',
  imports: [RouterModule], // Add RouterModule here
  standalone: true, // Mark this as a standalone component
  templateUrl: './requirements-page.component.html',
  styleUrl: './requirements-page.component.css'
})
export class RequirementsPageComponent {

}
