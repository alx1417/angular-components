import { Component, ElementRef, OnInit } from '@angular/core';
import { Button } from '@components/components/button/index';

@Component({
  selector: 'view-button',
  templateUrl: './button.view.html',
})
export class ButtonView implements OnInit {
  title: string = 'Button View';
  button: Button;

  constructor(
    private element: ElementRef,
  ) {}

  ngOnInit(): void {
    this.btnSettingsChange();
  }

  btnSettingsChange(): void {
    this.button = {
      id: 'btnSetting',
      text: this.element.nativeElement.querySelector('#btnSettingsText').value,
      size: this.element.nativeElement.querySelector('#btnSettingsSize').value,
    };
  }
}
