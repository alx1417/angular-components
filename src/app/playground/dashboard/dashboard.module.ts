import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
// Views
import { DashboardView } from './dashboard.view';
import { ComponentsModule } from '@components/components.module';

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
    ComponentsModule,
  ],
  declarations: [
    DashboardView
  ]
})
export class DashboardModule {}
