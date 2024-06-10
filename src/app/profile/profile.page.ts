import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  saveProfile() {
    console.log('Profile saved', this.profile);
  }
}
