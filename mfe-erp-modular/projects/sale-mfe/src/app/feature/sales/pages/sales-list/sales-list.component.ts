import { MFERouterLinkDirective } from 'lib-erp-modular';
import { ButtonModule } from 'primeng/button';
import { PageLayoutComponent } from 'lib-erp-modular';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  SaleListTableAction,
  SaleListTableComponent,
} from '../../components/sale-list-table/sale-list-table.component';
import { SaleService } from '../../../services/sale.service';
import { SaleListModel } from '../../models/sale-list.model';
import { SaleShowDialogComponent } from '../../components/sale-show-dialog/sale-show-dialog.component';
import { SaleShowModel } from '../../models/sale-show.model';

@Component({
  selector: 'app-sales-list',
  imports: [
    ButtonModule,
    MFERouterLinkDirective,
    PageLayoutComponent,
    SaleListTableComponent,
    SaleShowDialogComponent,
  ],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.css',
})
export default class SalesListComponent implements OnInit {
  protected readonly saleService = inject(SaleService);

  protected sales = signal<SaleListModel[]>([]);
  protected saleShow = signal<SaleShowModel | null>(null);

  protected saleShowDialog = signal<boolean>(false);

  ngOnInit(): void {
    this.saleService.getAll().subscribe({
      next: (res) => {
        this.sales.set(res);
      },
    });
  }
  protected saleCreateVisible = signal<boolean>(false);

  onAction(event: { action: SaleListTableAction; id: number }) {
    if (event.action == SaleListTableAction.SHOW) {
      this.saleShowDialog.set(true);
      this.getFindById(event.id);
    }
  }
  getFindById(saleId: number) {
    this.saleService.show(saleId).subscribe({
      next: (res) => this.saleShow.set(res),
    });
  }
}
