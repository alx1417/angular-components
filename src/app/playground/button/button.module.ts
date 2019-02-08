import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
// Views
import { ButtonView } from './button.view';
// Components
import { ComponentsModule } from '@components/components.module';

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
    ComponentsModule,
  ],
  declarations: [
    ButtonView
  ]
})
export class ButtonModule {}
