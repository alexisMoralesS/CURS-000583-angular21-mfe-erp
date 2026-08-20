import { FormControlError } from 'lib-erp-modular';

import { Component, inject, input, model, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomerCreateModel } from '../../models/customer-create.model';
import { DocumentTypeModel } from '../../../../shared/models/document-type.model';
@Component({
  selector: 'app-customer-form-create',
  imports: [
    ReactiveFormsModule,

    DialogModule,
    SelectModule,
    ButtonModule,
    InputTextModule,

    FormControlError,
  ],
  templateUrl: './customer-form-create.component.html',
  styleUrl: './customer-form-create.component.css',
})
export class CustomerFormCreateComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  documentTypes = input<DocumentTypeModel[]>([]);
  protected saved = output<CustomerCreateModel>();
  protected cancel = output<void>();

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    documentTypeId: ['', Validators.required],
    numberDocument: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
  });

  protected get nameCtrl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  protected get documentTypeIdCtrl(): FormControl {
    return this.form.get('documentTypeId') as FormControl;
  }

  protected get numberDocumentCtrl(): FormControl {
    return this.form.get('numberDocument') as FormControl;
  }

  protected get emailCtrl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  protected get phoneCtrl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  protected onCancel() {
    this.cancel.emit();
    this.form.reset();
  }
  onSubmit(): void {
    this.saved.emit(this.form.value as CustomerCreateModel);
    this.form.reset();
  }
}
