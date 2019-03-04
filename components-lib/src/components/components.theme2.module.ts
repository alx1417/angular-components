import { NgModule } from '@angular/core';

// Components modules
import { ButtonModule } from './button/theme2/button.module';
import { TableModule } from './table/index';
import { FormModule } from './form/index';

@NgModule({
  imports: [
    ButtonModule,
    TableModule,
    FormModule,
  ],
  exports: [
    ButtonModule,
    TableModule,
    FormModule,
  ],
})
export class ComponentsTheme2Module {}
