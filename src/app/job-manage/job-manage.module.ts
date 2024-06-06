import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobManagePageRoutingModule } from './job-manage-routing.module';

import { JobManagePage } from './job-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobManagePageRoutingModule
  ],
  declarations: [JobManagePage]
})
export class JobManagePageModule {}
