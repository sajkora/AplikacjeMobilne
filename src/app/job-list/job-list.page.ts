import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

interface Job {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.page.html',
  styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }
}
