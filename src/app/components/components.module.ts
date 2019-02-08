import { NgModule } from '@angular/core';

// Components modules
import { ButtonModule } from '@components/button/index';
import { TableModule } from '@components/table/index';

@NgModule({
  imports: [
    ButtonModule,
    TableModule,
  ],
  exports: [
    ButtonModule,
    TableModule,
  ]
})
export class ComponentsModule {}

// EXPORTS
// Button
export { Button, ButtonComponent } from '@components/button/index';
// Table
export { TableComponent } from '@components/table/index';
