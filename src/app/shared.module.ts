import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Environment
import { ENVIRONMENT } from '@environments/environment';
// Components
import { ComponentsTheme1Module } from '@components/components/components.theme1.module';
import { ComponentsTheme2Module } from '@components/components/components.theme2.module';
import { ComponentsTheme1Module as ComponentsTheme1ModuleLib } from 'components-lib';
import { ComponentsTheme2Module as ComponentsTheme2ModuleLib } from 'components-lib';


@NgModule({
  imports: [
    CommonModule,
    // ENVIRONMENT.production ? (ENVIRONMENT.theme === 'theme1' ? ComponentsTheme1ModuleLib : ComponentsTheme2ModuleLib)  : (ENVIRONMENT.theme === 'theme1' ? ComponentsTheme1Module : ComponentsTheme2Module),
    ENVIRONMENT.production ? ComponentsTheme1ModuleLib : ComponentsTheme1Module,
    ENVIRONMENT.production ? ComponentsTheme2ModuleLib : ComponentsTheme2Module,
  ],
  exports: [
    CommonModule,
    // ENVIRONMENT.production ? (ENVIRONMENT.theme === 'theme1' ? ComponentsTheme1ModuleLib : ComponentsTheme2ModuleLib)  : (ENVIRONMENT.theme === 'theme1' ? ComponentsTheme1Module : ComponentsTheme2Module),
    ENVIRONMENT.production ? ComponentsTheme1ModuleLib : ComponentsTheme1Module,
    ENVIRONMENT.production ? ComponentsTheme2ModuleLib : ComponentsTheme2Module,
  ],
})
export class SharedModule {}
