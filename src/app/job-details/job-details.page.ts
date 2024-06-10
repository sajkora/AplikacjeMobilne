import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Job {
  title: string;
  company: string;
  location: string;
  description: string;
  applications: Array<{ name: string, skills: string }>; // Add applications property
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.page.html',
  styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
  jobId: string | null = null;
  userRole: string | null = null;
  job: Job | null = null; // Define the job property

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.userRole = localStorage.getItem('userRole');

    // Mock job data - replace this with actual data fetching logic
    this.job = {
      title: 'Software Developer',
      company: 'Tech Company',
      location: 'New York',
      description: 'A job description goes here.',
      applications: [
        { name: 'John Doe', skills: 'Angular, Ionic' },
        { name: 'Jane Smith', skills: 'React, Node.js' }
      ]
    };
  }

  applyForJob() {
    console.log('Applied for job', this.jobId);
    // Here you would handle the application logic, such as storing the application details
  }
}
