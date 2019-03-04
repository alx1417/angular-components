import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// Form items
import { InputComponent } from './input/input-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputComponent,
  ],
  exports: [
    InputComponent,
    ReactiveFormsModule,
  ],
})
export class FormModule { }
