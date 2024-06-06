import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobManagePage } from './job-manage.page';

describe('JobManagePage', () => {
  let component: JobManagePage;
  let fixture: ComponentFixture<JobManagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JobManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
