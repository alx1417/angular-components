import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
// Views
import { FormView } from './form.view';
// Modules
import { SharedModule } from 'app/shared.module';

// Routes
const ROUTES: Route[] = [{
  path: '',
  children: [
    { path: '', component: FormView },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [
    FormView,
  ],
})
export class FormModule {}
