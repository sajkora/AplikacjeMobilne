import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from '../job-details/job.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.page.html',
  styleUrls: ['./job-list.page.scss'],
})
export class JobListPage implements OnInit {
  jobs$: Observable<Job[]>;

  constructor(private router: Router, private jobService: JobService) {
    this.jobs$ = this.jobService.jobs$;
  }

  ngOnInit() {}

  openJobDetail(job: Job) {
    this.router.navigate(['/job-details', job.id]);
  }
}
