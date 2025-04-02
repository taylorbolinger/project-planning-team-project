import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsPageComponent } from './requirements-page.component';

describe('RequirementsPageComponent', () => {
  let component: RequirementsPageComponent;
  let fixture: ComponentFixture<RequirementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequirementsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
