import { NgModule } from '@angular/core';

// Components modules
import { ButtonModule } from './button/theme2/button.module';
import { TableModule } from './table/index';

@NgModule({
  imports: [
    ButtonModule,
    TableModule,
  ],
  exports: [
    ButtonModule,
    TableModule,
  ],
})
export class ComponentsTheme2Module {}
