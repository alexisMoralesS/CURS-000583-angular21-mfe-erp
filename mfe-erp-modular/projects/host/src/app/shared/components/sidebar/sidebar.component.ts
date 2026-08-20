import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'host-sidebar',
  imports: [AvatarModule, BadgeModule, MenuModule, RippleModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  items = signal<MenuItem[]>([
    {
      separator: true,
    },
    {
      label: 'Dashboard',
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          routerLink: '/dashboard',
        },
      ],
    },
    {
      label: 'Ventas',
      items: [
        {
          label: 'Ventas',
          icon: 'pi pi-shopping-cart',
          routerLink: '/sales',
        },
      ],
    },
    {
      label: 'Productos',
      items: [
        {
          label: 'Productos',
          icon: 'pi pi-box',
          routerLink: '/products',
        },
        {
          label: 'Categorías',
          icon: 'pi pi-tags',
          routerLink: '/categories',

        },
      ],
    },
    {
      label: 'Clientes',
      items: [
        {
          label: 'Clientes',
          icon: 'pi pi-user',
          routerLink: '/customers',
        },
        {
          label: 'Tipos de Cliente',
          icon: 'pi pi-id-card',
        },
      ],
    },
  ]);
}
