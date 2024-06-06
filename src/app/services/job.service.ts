import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs = [
    { id: 1, title: 'Software Developer', description: 'Develop awesome software applications.' },
    { id: 2, title: 'Data Analyst', description: 'Analyze data to extract insights.' }
  ];
  private jobIdCounter = 3;

  constructor() { }

  getJobs() {
    return this.jobs;
  }

  addJob(title: string, description: string) {
    this.jobs.push({ id: this.jobIdCounter++, title, description });
  }

  updateJob(id: number, title: string, description: string) {
    const job = this.jobs.find(j => j.id === id);
    if (job) {
      job.title = title;
      job.description = description;
    }
  }

  deleteJob(id: number) {
    this.jobs = this.jobs.filter(j => j.id !== id);
  }
}
