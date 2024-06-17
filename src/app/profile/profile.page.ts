import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { JobService } from '../services/job.service';
import { Job } from '../job-details/job.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile = {
    name: '',
    age: null,
    education: '',
    institution: '',
    skills: ''
  };

  appliedJobs: Job[] = [];

  constructor(private navCtrl: NavController, private jobService: JobService) { }

  ngOnInit() {
    this.loadProfile();
    this.loadAppliedJobs();
  }

  loadProfile() {
    const profileString = localStorage.getItem('profile');
    if (profileString) {
      this.profile = JSON.parse(profileString);
    }
  }

  loadAppliedJobs() {
    const appliedJobIds = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
    this.appliedJobs = appliedJobIds.map((jobId: number) => this.jobService.getJob(jobId)).filter((job: Job | undefined): job is Job => job !== undefined);
  }

  saveProfile() {
    localStorage.setItem('profile', JSON.stringify(this.profile));
    console.log('Profile saved', this.profile);
  }

  goBack() {
    this.navCtrl.back();
  }
}
