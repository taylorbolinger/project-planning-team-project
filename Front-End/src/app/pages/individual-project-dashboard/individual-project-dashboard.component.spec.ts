import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualProjectDashboardComponent } from './individual-project-dashboard.component';

describe('IndividualProjectDashboardComponent', () => {
  let component: IndividualProjectDashboardComponent;
  let fixture: ComponentFixture<IndividualProjectDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualProjectDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualProjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
