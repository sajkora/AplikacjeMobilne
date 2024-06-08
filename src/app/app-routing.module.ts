import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'job-list', loadChildren: () => import('./job-list/job-list.module').then(m => m.JobListPageModule) },
  { path: 'job-manage', loadChildren: () => import('./job-manage/job-manage.module').then(m => m.JobManagePageModule) },
  { path: 'job-details/:id', loadChildren: () => import('./job-details/job-details.module').then(m => m.JobDetailsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

