import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from '../job-details/job.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
  jobId: number | null = null;
  userRole: string | null = null;
  job: Job | null = null;
  hasApplied: boolean = false;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.jobId = +id; // Convert string to number
      this.job = this.jobService.getJob(this.jobId) || null;
    }
    this.userRole = localStorage.getItem('userRole');

    if (!this.job) {
      // Handle case where job is not found
      console.log('Job not found');
    } else {
      this.checkIfApplied();
    }
  }

  checkIfApplied() {
    const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
    this.hasApplied = appliedJobs.includes(this.jobId);
  }

  async applyForJob() {
    const profileString = localStorage.getItem('profile');
    if (profileString === null) {
      console.log('Profile not found in localStorage');
      return;
    }

    const profile = JSON.parse(profileString);
    if (!profile.name || !profile.skills) {
      console.log('Incomplete profile data');
      return;
    }

    if (this.job !== null && !this.hasApplied) {
      this.job.applications = this.job.applications || [];
      this.job.applications.push({
        name: profile.name,
        skills: profile.skills
      });
      this.jobService.updateJobApplications(this.job.id, this.job.applications); 

      const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
      if (!appliedJobs.includes(this.job.id)) {
        appliedJobs.push(this.job.id);
        localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
      }

      this.hasApplied = true;
      console.log('Applied for job', this.jobId);
    }
  }
}
