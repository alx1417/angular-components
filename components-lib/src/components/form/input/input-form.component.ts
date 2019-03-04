import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Item classes
import { ItemInputClass } from './input-form.class';


@Component({
  selector: 'cmp-input-form',
  templateUrl: 'input-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  // // Size on large window
  // @Input() sizeLarge: Size | number = 'small';
  // // Size on medium window
  // @Input() sizeMedium: Size | number = 'medium';
  // // Size on small window
  // @Input() sizeSmall: Size | number = 'full';
  // Constructor class of the input.
  @Input() itemClass: ItemInputClass;

  // Parent form
  form: FormGroup;

  /**
   * Get the parent form from the control and save it.
   */
  ngOnInit(): void {
    this.form = this.itemClass.control.parent as FormGroup;
  }
}

