import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './playground/dashboard/dashboard.module#DashboardModule' },
  { path: 'button', loadChildren: './playground/button/button.module#ButtonModule' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
