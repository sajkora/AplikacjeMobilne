import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

interface Job {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-job-manage',
  templateUrl: './job-manage.page.html',
  styleUrls: ['./job-manage.page.scss'],
})
export class JobManagePage implements OnInit {
  jobs: Job[] = [];
  title: string = '';
  description: string = '';
  selectedJob: Job | null = null;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  addJob() {
    if (this.title && this.description) {
      this.jobService.addJob(this.title, this.description);
      this.title = '';
      this.description = '';
      this.jobs = this.jobService.getJobs();
    }
  }

  selectJob(job: Job) {
    this.selectedJob = job;
    this.title = job.title;
    this.description = job.description;
  }

  updateJob() {
    if (this.selectedJob) {
      this.jobService.updateJob(this.selectedJob.id, this.title, this.description);
      this.selectedJob = null;
      this.title = '';
      this.description = '';
      this.jobs = this.jobService.getJobs();
    }
  }

  deleteJob(id: number) {
    this.jobService.deleteJob(id);
    this.jobs = this.jobService.getJobs();
  }

  clearSelection() {
    this.selectedJob = null;
    this.title = '';
    this.description = '';
  }
}
