import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../job-details/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private localStorageKey = 'jobs';
  private jobs: Job[] = this.loadJobs();
  private jobIdCounter: number = this.jobs.length > 0 ? Math.max(...this.jobs.map(job => job.id)) + 1 : 1;

  private jobsSubject: BehaviorSubject<Job[]> = new BehaviorSubject<Job[]>(this.jobs);
  jobs$: Observable<Job[]> = this.jobsSubject.asObservable();

  constructor() { }

  private loadJobs(): Job[] {
    const jobs = localStorage.getItem(this.localStorageKey);
    return jobs ? JSON.parse(jobs) : [];
  }

  private saveJobs(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.jobs));
  }

  getJobs(): Job[] {
    return this.jobs;
  }

  getJob(id: number): Job | undefined {
    return this.jobs.find(j => j.id === id);
  }

  addJob(title: string, description: string, company: string, location: string) {
    this.jobs.push({ id: this.jobIdCounter++, title, description, company, location, applications: [] });
    this.saveJobs();
    this.jobsSubject.next(this.jobs);  // Notify subscribers of the updated job list
  }

  updateJob(id: number, title: string, description: string, company: string, location: string) {
    const job = this.jobs.find(j => j.id === id);
    if (job) {
      job.title = title;
      job.description = description;
      job.company = company;
      job.location = location;
      this.saveJobs();
      this.jobsSubject.next(this.jobs);  
    }
  }

  updateJobApplications(id: number, applications: Array<{ name: string, skills: string }>) {
    const job = this.jobs.find(j => j.id === id);
    if (job) {
      job.applications = applications;
      this.saveJobs();
      this.jobsSubject.next(this.jobs);  
    }
  }

  deleteJob(id: number) {
    this.jobs = this.jobs.filter(j => j.id !== id);
    this.saveJobs();
    this.jobsSubject.next(this.jobs); 
  }
}
