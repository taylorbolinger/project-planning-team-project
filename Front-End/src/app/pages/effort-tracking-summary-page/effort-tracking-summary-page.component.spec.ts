import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortTrackingSummaryPageComponent } from './effort-tracking-summary-page.component';

describe('EffortTrackingSummaryPageComponent', () => {
  let component: EffortTrackingSummaryPageComponent;
  let fixture: ComponentFixture<EffortTrackingSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffortTrackingSummaryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffortTrackingSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
