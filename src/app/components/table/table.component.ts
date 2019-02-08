import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cmp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
}
