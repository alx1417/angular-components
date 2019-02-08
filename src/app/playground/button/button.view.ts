import { Component } from '@angular/core';
import { Button } from '@components/button';

@Component({
  selector: 'view-button',
  templateUrl: './button.view.html',
})
export class ButtonView {
  title: string = 'Button View';
  buttons: Button = {
    id: 'test',
    text: 'Test',
  };
}
