import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Button } from './button.interface';

@Component({
  selector: 'cmp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  // List of buttons to show
  @Input() buttons: Button | Button[];
  // Emitted then click on a button, send the clicked button.
  @Output() btnClick: EventEmitter<Button> = new EventEmitter<Button>();

  /**
   * Convert the button on array if is a single button.
   */
  ngOnChanges(): void {
    if (!Array.isArray(this.buttons)) {
      this.buttons = [this.buttons];
    }
  }
  /**
   * Executed when click on a button, emit the event btnClick.
   */
  onClick(btn: Button): void {
    this.btnClick.emit(btn);
  }
}
