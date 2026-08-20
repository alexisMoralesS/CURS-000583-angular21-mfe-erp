import { ToastModule } from 'primeng/toast';
import { SaleFormCreateComponent } from './../../components/sale-form-create/sale-form-create.component';
import { MFENavigateService, PageLayoutComponent } from 'lib-erp-modular';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SaleService } from '../../../services/sale.service';
import { SaleCatalogModel } from '../../models/sale-catalog.model';
import { SaleCreateModel } from '../../models/sale-create.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sales-create',
  imports: [ButtonModule, ToastModule, PageLayoutComponent, SaleFormCreateComponent],
  templateUrl: './sales-create.component.html',
  styleUrl: './sales-create.component.css',
  providers: [MessageService],
})
export default class SalesCreateComponent implements OnInit {
  private readonly messageService = inject(MessageService);
  private readonly saleService = inject(SaleService);
  private readonly mFENavigateService = inject(MFENavigateService);

  protected catalogs = signal<SaleCatalogModel | null>(null);

  ngOnInit(): void {
    this.getCatalogs();
  }

  getCatalogs() {
    this.saleService.getCatalogs().subscribe({
      next: (res: SaleCatalogModel) => this.catalogs.set(res),
    });
  }

  onSaved(data: SaleCreateModel) {
    this.saleService.create(data).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Operación Exitosa',
          detail: res.message,
        });
        this.onCancel();
      },
    });
  }
  onCancel() {
    this.mFENavigateService.navigate('sales', '/');
  }
}
