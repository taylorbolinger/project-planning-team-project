import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-individual-project-dashboard',
  templateUrl: './individual-project-dashboard.component.html',
  standalone: true,
  styleUrls: ['./individual-project-dashboard.component.css'],
  imports: [RouterModule] // Import RouterModule for routing functionality
})
export class IndividualProjectDashboardComponent implements OnInit {
  projectId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the project ID from the route parameters
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log('Project ID:', this.projectId);
  }
}

describe('IndividualProjectDashboardComponent', () => {
  let component: IndividualProjectDashboardComponent;
  let fixture: ComponentFixture<IndividualProjectDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]), // Configure RouterModule for testing
        IndividualProjectDashboardComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualProjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
