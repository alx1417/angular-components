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
    this.initBtns();
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
      if (index === 0) {
        btn.text = this.element.nativeElement.querySelector('#btnSettingsText').value;
      }
      btn.size = this.element.nativeElement.querySelector('#btnSettingsSize').value;
      btn.sizeMob = this.element.nativeElement.querySelector('#btnSettingsSizeMob').value;
      btn.type = this.element.nativeElement.querySelector('#btnSettingsType').value;
      btn.disabled = this.element.nativeElement.querySelector('#btnSettingsDisabled').checked;
    });
    this.buttonTheme2.forEach((btn, index) => {
      if (index === 0) {
        btn.text = this.element.nativeElement.querySelector('#btnSettingsText').value;
      }
      btn.size = this.element.nativeElement.querySelector('#btnSettingsSize').value;
      btn.sizeMob = this.element.nativeElement.querySelector('#btnSettingsSizeMob').value;
      btn.type = this.element.nativeElement.querySelector('#btnSettingsType').value;
      btn.disabled = this.element.nativeElement.querySelector('#btnSettingsDisabled').checked;
    });
    this.refreshButtons();
  }

  private initBtns(): void {
    this.buttonTheme1[0] = {
      id: 'btnTheme1',
      text: this.element.nativeElement.querySelector('#btnSettingsText').value,
      size: this.element.nativeElement.querySelector('#btnSettingsSize').value,
      sizeMob: this.element.nativeElement.querySelector('#btnSettingsSizeMob').value,
      type: this.element.nativeElement.querySelector('#btnSettingsType').value,
      disabled: this.element.nativeElement.querySelector('#btnSettingsDisabled').checked,
    };
    this.buttonTheme2[0] = {
      id: 'btnTheme2',
      text: this.element.nativeElement.querySelector('#btnSettingsText').value,
      size: this.element.nativeElement.querySelector('#btnSettingsSize').value,
      sizeMob: this.element.nativeElement.querySelector('#btnSettingsSizeMob').value,
      type: this.element.nativeElement.querySelector('#btnSettingsType').value,
      disabled: this.element.nativeElement.querySelector('#btnSettingsDisabled').checked,
    };
  }
  private addButton(): void {
    this.dynamicButtonsNum++;
    this.buttonTheme1.push({
      id: 'dynamicBtnTheme1_' + this.dynamicButtonsNum,
      text: 'Dynamic btn ' + this.dynamicButtonsNum,
      size: this.element.nativeElement.querySelector('#btnSettingsSize').value,
      sizeMob: this.element.nativeElement.querySelector('#btnSettingsSizeMob').value,
      type: this.element.nativeElement.querySelector('#btnSettingsType').value,
      disabled: this.element.nativeElement.querySelector('#btnSettingsDisabled').checked,
    });
    this.buttonTheme2.push({
      id: 'dynamicBtnTheme2_' + this.dynamicButtonsNum,
      text: 'Dynamic btn ' + this.dynamicButtonsNum,
      size: this.element.nativeElement.querySelector('#btnSettingsSize').value,
      sizeMob: this.element.nativeElement.querySelector('#btnSettingsSizeMob').value,
      type: this.element.nativeElement.querySelector('#btnSettingsType').value,
      disabled: this.element.nativeElement.querySelector('#btnSettingsDisabled').checked,
    });
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
