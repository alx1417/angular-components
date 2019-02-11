import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
// Views
import { ButtonView } from './button.view';
// Modules
import { SharedModule } from 'app/shared.module';

// Routes
const ROUTES: Route[] = [{
  path: '',
  children: [
    { path: '', component: ButtonView },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [
    ButtonView,
  ],
})
export class ButtonModule {}
