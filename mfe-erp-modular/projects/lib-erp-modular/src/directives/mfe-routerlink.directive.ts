import { Directive, ElementRef, HostListener, effect, inject, input } from '@angular/core';
import { MFENavigateService } from '../services/mfe-navigate.service';

@Directive({
  selector: '[mfeRouterLink]',
})
export class MFERouterLinkDirective {
  readonly mfeRouterLink = input<string>('');
  readonly routerLinkActive = input<string>('active');
  readonly queryParams = input<any>();
  readonly mfeBase = input<string>('');

  private readonly navigateService = inject(MFENavigateService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => {
      const currentRoute = this.navigateService.currentRoute();

      const targetRoute = `${this.mfeBase()}/${this.mfeRouterLink()}`;

      const activeClass = this.routerLinkActive();

      if (currentRoute === targetRoute) {
        this.elementRef.nativeElement.classList.add(activeClass);
      } else {
        this.elementRef.nativeElement.classList.remove(activeClass);
      }
    });
  }

  @HostListener('click')
  navigate(): void {
    this.navigateService.navigate(this.mfeBase(), this.mfeRouterLink(), {
      queryParams: this.queryParams(),
    });
  }
}
