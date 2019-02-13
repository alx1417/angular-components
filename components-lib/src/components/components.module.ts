import { NgModule } from '@angular/core';

// Components modules
import { ButtonModule } from './button/index';
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
export class ComponentsModule {}
