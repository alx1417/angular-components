import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonCommonComponent } from '../button.common.component';

@Component({
  selector: 'cmp-button-theme1',
  templateUrl: '../button.common.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent extends ButtonCommonComponent {

}
