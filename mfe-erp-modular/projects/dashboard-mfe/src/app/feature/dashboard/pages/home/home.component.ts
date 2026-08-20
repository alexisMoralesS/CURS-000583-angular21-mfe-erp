import { ButtonModule } from 'primeng/button';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet } from '@angular/common';
import { Component, DestroyRef, effect, inject, Renderer2, signal, Type } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  customerMfe = signal<Type<unknown> | null>(null);

  readonly dialogVisible = signal(false);
}
