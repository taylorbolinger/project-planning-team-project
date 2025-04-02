import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailsPageComponent } from './pages/project-details-page/project-details-page.component';
import { RequirementsPageComponent } from './pages/requirements-page/requirements-page.component';
import { EffortTrackingSummaryPageComponent } from './pages/effort-tracking-summary-page/effort-tracking-summary-page.component';
import { IndividualProjectDashboardComponent } from './pages/individual-project-dashboard/individual-project-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route redirects to login
  { path: 'login', component: LoginComponent }, // Login page
  { path: 'dashboard', component: DashboardComponent }, // Dashboard page
  { path: 'project-details', component: ProjectDetailsPageComponent }, // Project details page
  { path: 'requirements', component: RequirementsPageComponent }, // Requirements page
  { path: 'effort-tracking', component: EffortTrackingSummaryPageComponent }, // Effort tracking summary page
  { path: 'individual-project', component: IndividualProjectDashboardComponent }, // Individual project dashboard
  { path: '**', redirectTo: 'login' } // Wildcard route redirects to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
