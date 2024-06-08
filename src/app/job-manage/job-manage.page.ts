import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../job-details/job.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-manage',
  templateUrl: './job-manage.page.html',
  styleUrls: ['./job-manage.page.scss'],
})
export class JobManagePage implements OnInit {
  jobs$: Observable<Job[]>;
  title: string = '';
  description: string = '';
  company: string = '';
  location: string = '';
  selectedJob: Job | null = null;

  constructor(private jobService: JobService) {
    this.jobs$ = this.jobService.jobs$;
  }

  ngOnInit() {}

  addJob() {
    if (this.title && this.description && this.company && this.location) {
      this.jobService.addJob(this.title, this.description, this.company, this.location);
      this.clearForm();
    }
  }

  selectJob(job: Job) {
    this.selectedJob = job;
    this.title = job.title;
    this.description = job.description;
    this.company = job.company;
    this.location = job.location;
  }

  updateJob() {
    if (this.selectedJob) {
      this.jobService.updateJob(this.selectedJob.id, this.title, this.description, this.company, this.location);
      this.clearForm();
    }
  }

  deleteJob(id: number) {
    this.jobService.deleteJob(id);
  }

  clearForm() {
    this.selectedJob = null;
    this.title = '';
    this.description = '';
    this.company = '';
    this.location = '';
  }
}
