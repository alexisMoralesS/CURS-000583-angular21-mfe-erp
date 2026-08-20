import { Component, DestroyRef, inject, Renderer2, signal, Type } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EventBusService, MFE_EVENTS } from 'lib-erp-modular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    private renderer = inject(Renderer2);
  private destroyRef = inject(DestroyRef);
  private eventBusService = inject(EventBusService);

  private readonly router = inject(Router);
  protected readonly title = signal('host');

  dashboardMfe = signal<Type<unknown> | null>(null);

  constructor() {
    this.eventBusService.on(MFE_EVENTS.ROUTE_CHANGED, (event: any) => {
      const { route, extras } = event;
      this.router.navigate([route], extras);
    });
    window.isHost = true;
  }
}
