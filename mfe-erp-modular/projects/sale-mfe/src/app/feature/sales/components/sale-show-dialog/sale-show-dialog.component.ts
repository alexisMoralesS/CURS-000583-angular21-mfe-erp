import { CurrencyPipe } from '@angular/common';
import { Component, input, model } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { SaleShowModel } from '../../models/sale-show.model';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-sale-show-dialog',
  imports: [DialogModule, TableModule, CurrencyPipe, DividerModule],
  templateUrl: './sale-show-dialog.component.html',
  styleUrl: './sale-show-dialog.component.css',
})
export class SaleShowDialogComponent {
  public visible = model<boolean>(false);

  public sale = input<SaleShowModel | null>(null);
}
