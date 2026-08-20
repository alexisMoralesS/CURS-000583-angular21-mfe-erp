import { Component, input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  imports: [ReactiveFormsModule],
  templateUrl: './form-control-error.html',
  styleUrl: './form-control-error.css',
})
export class FormControlError {
  control = input.required<AbstractControl | null>();

}
