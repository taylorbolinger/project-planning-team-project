import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectDetailsPageComponent } from './pages/project-details-page/project-details-page.component';
import { RequirementsPageComponent } from './pages/requirements-page/requirements-page.component';
import { EffortTrackingSummaryPageComponent } from './pages/effort-tracking-summary-page/effort-tracking-summary-page.component';
import { IndividualProjectDashboardComponent } from './pages/individual-project-dashboard/individual-project-dashboard.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project-details-page/:id', component: ProjectDetailsPageComponent }, // Route for Project Details
  { path: 'requirements-page/:id', component: RequirementsPageComponent }, // Route for Requirements
  { path: 'effort-tracking-summary-page/:id', component: EffortTrackingSummaryPageComponent }, // Route for Effort Tracking
  { path: 'individual-project-dashboard/:id', component: IndividualProjectDashboardComponent }, // Dynamic route for individual project
  { path: 'new-project', component: NewProjectComponent }, // Route for New Project
  { path: '**', redirectTo: 'dashboard' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
