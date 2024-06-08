import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobDetailsPage } from '../job-details/job-details.page'; 

describe('JobDetailPage', () => {
  let component: JobDetailsPage;
  let fixture: ComponentFixture<JobDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

