import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
  output,
  signal,
  Type,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { CurrencyPipe, NgComponentOutlet } from '@angular/common';
import {
  CustomerSelectedDto,
  EventBusService,
  MFE_CUSTOMER_EVENTS,
  MFE_PRODUCT_EVENTS,
  ProductSelectedDto,
} from 'lib-erp-modular';
import { TableModule } from 'primeng/table';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { form, FormField, min, required } from '@angular/forms/signals';
import { SaleCatalogModel } from '../../models/sale-catalog.model';
import { SerieListModel } from '../../models/serie-list.model';
import { SaleCreateModel } from '../../models/sale-create.model';
interface ProductAddTable {
  id: string;
  product: string;
  price: number | null;
  quantity: number | null;
  subtotal: number | null;
}
interface Totals {
  subtotal: number;
  igv: number;
  total: number;
}
@Component({
  selector: 'app-sale-form-create',
  imports: [
    NgComponentOutlet,
    FormField,
    FormsModule,
    ReactiveFormsModule,
    CurrencyPipe,

    InputTextModule,
    SelectModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    AutoCompleteModule,
    TableModule,
  ],
  templateUrl: './sale-form-create.component.html',
  styleUrl: './sale-form-create.component.css',
})
export class SaleFormCreateComponent implements OnInit {
  private readonly eventBus = inject(EventBusService);

  public catalogs = input<SaleCatalogModel | null>(null);

  protected customerPick = signal<Type<unknown> | null>(null);
  protected productPick = signal<Type<unknown> | null>(null);
  protected products = signal<ProductAddTable[]>([]);
  protected productAdding = signal<boolean>(false);
  protected totals = computed<Totals | null>(() => this.totalsBuild());
  protected saveButtonInvalid = computed<boolean>(() => {
    const products = this.products();

    if (products.length == 0) return false;

    const ProductsZeroQuantity = this.products().filter((item) => (item.quantity ?? 0) <= 0);
    if (ProductsZeroQuantity.length > 0) return false;

    return true;
  });
  protected typeReceipts = computed(() => this.catalogs()?.typeReceipts ?? []);
  protected series = signal<SerieListModel[]>([]);
  protected paymentMethods = computed(() => this.catalogs()?.paymentMethod ?? []);

  formInitialValue: ProductAddTable = {
    id: '',
    product: '',
    price: null,
    quantity: 1,
    subtotal: null,
  };
  protected formAddModel = signal<ProductAddTable>({ ...this.formInitialValue });
  protected formAdd = form(this.formAddModel, (root) => {
    required(root.product, { message: 'El producto es requerido.' });
    required(root.quantity, { message: 'La cantidad es requerida' });
    min(root.quantity, 1, { message: 'La cantidad es requerida' });
  });

  formSale = new FormGroup({
    typeReceiptId: new FormControl<string | null>(null, [Validators.required]),
    seriesId: new FormControl<string>('', [Validators.required]),
    paymentMethodId: new FormControl<string>('', [Validators.required]),
    customerId: new FormControl<string>('', [Validators.required]),
  });

  protected saved = output<SaleCreateModel>();
  protected cancel = output<void>();
  constructor() {
    effect(async () => {
      const customerPick = await loadRemoteModule('customer-mfe', './CustomerPickComponent');
      this.customerPick.set(customerPick.CustomerPickComponent);

      const productPick = await loadRemoteModule('product-mfe', './ProductPickComponent');
      this.productPick.set(productPick.ProductPickComponent);
    });
    effect(() => {
      const price = this.formAdd.price().value();
      const quantity = this.formAdd.quantity().value();
      if (price == null || quantity == null) {
        return;
      }
      this.formAdd.subtotal().value.set(price * quantity);
    });
    effect(() => {
      const receipts = this.typeReceipts();

      if (receipts.length > 0 && this.typeReceiptIdCtrl.value == null) {
        this.typeReceiptIdCtrl.setValue(receipts[0].id);
      }
    });

    this.eventBus.on(
      MFE_CUSTOMER_EVENTS.CUSTOMER_SELECTED,
      (customerSelectedDto: CustomerSelectedDto) => {
        this.customerIdCtrl.setValue(customerSelectedDto?.id);
      },
    );
    this.eventBus.on(
      MFE_PRODUCT_EVENTS.PRODUCT_SELECTED,
      (productSelectedDto: ProductSelectedDto) => {
        this.formAdd.id().value.set(productSelectedDto.id);
        this.formAdd.product().value.set(productSelectedDto.name);
        this.formAdd.price().value.set(productSelectedDto.price);
        this.formAdd.quantity().value.set(1);
        this.formAdd.subtotal().value.set(productSelectedDto.price);
      },
    );
  }

  get typeReceiptIdCtrl() {
    return this.formSale.get('typeReceiptId') as FormControl;
  }

  get seriesIdCtrl() {
    return this.formSale.get('seriesId') as FormControl;
  }

  get paymentMethodIdCtrl() {
    return this.formSale.get('paymentMethodId') as FormControl;
  }

  get customerIdCtrl() {
    return this.formSale.get('customerId') as FormControl;
  }

  ngOnInit(): void {
    this.typeReceiptIdCtrl.valueChanges.subscribe((typeReceiptId: number) => {
      this.series.set(
        this.catalogs()?.typeReceipts.find((tr) => tr.id == typeReceiptId)?.series ?? [],
      );
      this.seriesIdCtrl.setValue(this.series().length > 0 ? this.series()[0].id : '');
    });
  }

  totalsBuild(): Totals | null {
    const products = this.products();

    if (products.length == 0) return null;

    const total = this.products().reduce((a, b) => a + (b.subtotal ?? 0), 0);

    if (total == 0) return null;

    const subtotal = total / 1.18;
    const igv = total - subtotal;

    return { total, subtotal, igv };
  }
  protected onCancel() {
    this.cancel.emit();
    // this.form.reset();
  }
  onSubmit(): void {
    this.saved.emit({
      seriesId: this.seriesIdCtrl.value,
      paymentMethodId: this.paymentMethodIdCtrl.value,
      customerId: this.customerIdCtrl.value,
      subtotal: this.totals()?.subtotal || 0,
      igv: this.totals()?.igv || 0,
      total: this.totals()?.total || 0,
      products: this.products().map((p) => ({
        id: p.id,
        quantity: p.quantity!,
        price: p.price!,
        subtotal: p.subtotal!,
      })),
    });
  }
  productAddTr() {
    if (this.productAdding()) {
      return;
    }

    this.productAdding.set(true);
  }
  onAddProduct() {
    this.products.update((items) => [...items, { ...this.formAdd().value() }]);
    this.onCancelAddProduct();
  }
  onCancelAddProduct() {
    this.productAdding.set(false);
    this.formAdd().value.set({ ...this.formInitialValue });
  }
  onDeleteProduct(product: ProductAddTable) {
    this.products.update((products) => [...products.filter((p) => p.id != product.id)]);
  }
  changeQuantity(productId: string, quantity: number): void {
    this.products.update((products) =>
      products.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity,
              subtotal: product.price == null ? null : product.price * quantity,
            }
          : product,
      ),
    );
  }
}
