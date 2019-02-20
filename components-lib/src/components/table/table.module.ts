import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
// import { ButtonModule } from '../button/index';

@NgModule({
  imports: [
    CommonModule,
    // ButtonModule,
  ],
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent,
  ],
})
export class TableModule { }
