import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Environment
import { ENVIRONMENT } from '@environments/environment';
// Components
import { ComponentsModule } from '@components/components.module';
import { ComponentsModule as ComponentsModuleLib } from 'components-lib';


@NgModule({
  imports: [
    CommonModule,
    ENVIRONMENT.production ? ComponentsModuleLib : ComponentsModule,
  ],
  exports: [
    CommonModule,
    ENVIRONMENT.production ? ComponentsModuleLib : ComponentsModule,
  ],
})
export class SharedModule {}
