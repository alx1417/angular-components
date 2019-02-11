import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
// Views
import { DashboardView } from './dashboard.view';
// Modules
import { SharedModule } from 'app/shared.module';

// Routes
const ROUTES: Route[] = [{
  path: '',
  children: [
    { path: '', component: DashboardView },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [
    DashboardView,
  ],
})
export class DashboardModule {}
