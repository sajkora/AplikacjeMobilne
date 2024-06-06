import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobManagePage } from './job-manage.page';

const routes: Routes = [
  {
    path: '',
    component: JobManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobManagePageRoutingModule {}
