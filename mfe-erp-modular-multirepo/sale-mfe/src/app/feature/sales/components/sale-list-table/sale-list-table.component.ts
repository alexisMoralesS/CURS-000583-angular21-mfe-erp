import { TableModule } from 'primeng/table';
import { PageLayoutComponent } from 'lib-erp-modular';
import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePipe, CurrencyPipe } from '@angular/common';
export enum SaleListTableAction {
  SHOW = 'show',
}
@Component({
  selector: 'app-sale-list-table',
  imports: [TableModule, ButtonModule, DatePipe, CurrencyPipe],
  templateUrl: './sale-list-table.component.html',
  styleUrl: './sale-list-table.component.css',
})
export class SaleListTableComponent {
  saleListTableAction = SaleListTableAction;
  public readonly sales = input<any[]>([]);

  public action = output<{ action: SaleListTableAction; id: number }>();

  onAction(action: SaleListTableAction, id: number) {
    this.action.emit({ action, id });
  }
}
