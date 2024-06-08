import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from './job.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
  job: Job | undefined;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit() {
    const jobIdParam = this.route.snapshot.paramMap.get('id');
    if (jobIdParam) {
      const jobId = +jobIdParam;
      if (!isNaN(jobId)) {
        this.job = this.jobService.getJob(jobId);
      } else {
        // Handle the error case, e.g., navigate back to job list or show an error message
        console.error('Job ID is not a number');
      }
    } else {
      // Handle the error case where jobIdParam is null
      console.error('Job ID param is null');
    }
  }
}

