import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IndividualProjectDashboardComponent } from './individual-project-dashboard.component';

@Component({
  selector: 'app-individual-project-dashboard',
  templateUrl: './individual-project-dashboard.component.html',
  styleUrls: ['./individual-project-dashboard.component.css'],
  standalone: true,
  imports: [RouterModule] // Add RouterModule here
})
export class IndividualProjectDashboardComponent {}

describe('IndividualProjectDashboardComponent', () => {
  let component: IndividualProjectDashboardComponent;
  let fixture: ComponentFixture<IndividualProjectDashboardComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Mock HTTP requests
        RouterTestingModule.withRoutes([]), // Mock routing
        IndividualProjectDashboardComponent // Import the standalone component
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: (key: string) => '1' } } // Mock route parameter
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualProjectDashboardComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the project ID from the route parameters', () => {
    expect(component.projectId).toBe('1'); // Verify the project ID is retrieved correctly
  });

  it('should fetch project details on init', () => {
    const mockProjectDetails = { id: 1, name: 'Test Project', description: 'Test Description' };

    // Simulate the HTTP GET request
    const req = httpMock.expectOne('http://localhost:8080/api/projects/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockProjectDetails);

    // Verify the project details are set
    expect(component.projectDetails).toEqual(mockProjectDetails);
    httpMock.verify();
  });
});
