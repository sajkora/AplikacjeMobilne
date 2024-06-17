import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'employee' }
  },
  {
    path: 'job-list',
    loadChildren: () => import('./job-list/job-list.module').then(m => m.JobListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'job-manage',
    loadChildren: () => import('./job-manage/job-manage.module').then(m => m.JobManagePageModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: 'employer' }
  },
  {
    path: 'job-details/:id',
    loadChildren: () => import('./job-details/job-details.module').then(m => m.JobDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
