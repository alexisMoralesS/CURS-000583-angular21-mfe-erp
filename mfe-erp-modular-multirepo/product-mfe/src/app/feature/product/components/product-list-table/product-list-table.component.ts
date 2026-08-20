import { TableModule } from 'primeng/table';
import { Component, input, signal } from '@angular/core';
import { ProductListModel } from '../../models/product-list.model';
import { JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-list-table',
  imports: [TableModule, ButtonModule],
  templateUrl: './product-list-table.component.html',
  styleUrl: './product-list-table.component.css',
})
export class ProductListTableComponent {
  products = input<ProductListModel[]>([]);
}
