import { Component, ElementRef, OnInit } from '@angular/core';
import { Button } from '../../../../components-lib/public_api';


@Component({
  selector: 'view-button',
  templateUrl: './button.view.html',
})
export class ButtonView implements OnInit {
  title: string = 'Button View';
  buttonTheme1: Button[] = [];
  buttonTheme2: Button[] = [];
  dynamicButtonsNum: number = 0;

  constructor(
    private element: ElementRef,
  ) { }

  ngOnInit(): void {
    this.initButtons();
  }

  handlerClickBtnAddRemove(btn: Button): void {
    switch (btn.id) {
      case 'addBtn':
        this.addButton();
        break;
      case 'removeBtn':
        this.removeButton();
        break;
    }
  }

  btnSettingsChange(): void {
    this.buttonTheme1.forEach((btn, index) => {
      this.updateButtonsSettings(btn, index === 0);
    });
    this.buttonTheme2.forEach((btn, index) => {
      this.updateButtonsSettings(btn, index === 0);
    });
    this.refreshButtons();
  }

  private updateButtonsSettings(btn: Button, isFirstBtn: boolean = true): Button {
    if (isFirstBtn) {
      btn.text = this.element.nativeElement.querySelector('#btnSettingsText').value;
    }
    btn.size = this.element.nativeElement.querySelector('#btnSettingsSize').value;
    btn.sizeMob = this.element.nativeElement.querySelector('#btnSettingsSizeMob').value;
    btn.type = this.element.nativeElement.querySelector('#btnSettingsType').value;
    btn.disabled = this.element.nativeElement.querySelector('#btnSettingsDisabled').checked;
    return btn;
  }

  private initButtons(): void {
    this.buttonTheme1[0] = this.updateButtonsSettings({ id: 'btnTheme1' });
    this.buttonTheme2[0] = this.updateButtonsSettings({ id: 'btnTheme2' });
  }
  private addButton(): void {
    this.dynamicButtonsNum++;
    this.buttonTheme1.push(this.updateButtonsSettings({
      id: 'dynamicBtnTheme1_' + this.dynamicButtonsNum,
      text: 'Dynamic btn ' + this.dynamicButtonsNum,
    }, false));
    this.buttonTheme2.push(this.updateButtonsSettings({
      id: 'dynamicBtnTheme2_' + this.dynamicButtonsNum,
      text: 'Dynamic btn ' + this.dynamicButtonsNum,
    }, false));
    this.refreshButtons();
  }

  private removeButton(): void {
    if (this.dynamicButtonsNum > 0) {
      this.buttonTheme1.pop();
      this.buttonTheme2.pop();
      this.dynamicButtonsNum--;
      this.refreshButtons();
    }
  }

  private refreshButtons(): void {
    this.buttonTheme1 = this.buttonTheme1.slice();
    this.buttonTheme2 = this.buttonTheme2.slice();
  }
}
