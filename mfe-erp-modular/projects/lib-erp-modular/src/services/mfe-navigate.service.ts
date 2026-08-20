import { Injectable, inject, signal } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MFE_EVENTS } from '../constants';

@Injectable({ providedIn: 'root' })
export class MFENavigateService {
  private readonly router = inject(Router);

  private readonly _navigation = signal(false);
  readonly navigation = this._navigation.asReadonly();

  private readonly _currentRoute = signal('');
  readonly currentRoute = this._currentRoute.asReadonly();

  navigate(mfeBase: string, route: string, extras?: NavigationExtras): void {
    let url;

    if (this.isHost()) {
      url = this.buildUrl(mfeBase, route);
      this.notifyHostNavigation(url, extras);
    } else {
      url = this.buildUrl('', route);
      this.router.navigate([url], extras);
    }

    this._currentRoute.set(url);
    this._navigation.set(true);
  }

  private isHost(): boolean {
    return Boolean((window as any).isHost);
  }

  private notifyHostNavigation(route: string, extras?: NavigationExtras): void {
    window.dispatchEvent(
      new CustomEvent(MFE_EVENTS.ROUTE_CHANGED, {
        detail: {
          route,
          extras,
        },
      }),
    );
  }

  private buildUrl(mfeBase: string, route: string): string {
    if (this.isHost()) {
      return `${this.clean(mfeBase)}/${this.clean(route)}`;
    }

    return `${this.clean(route)}`;
  }

  private clean(path: string): string {
    return path.replace(/^\/+|\/+$/g, '');
  }
}
