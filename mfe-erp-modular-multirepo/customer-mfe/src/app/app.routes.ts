import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/customer/pages/customers-list/customers-list.component'),
  },
  {
    path: 'types',
    loadComponent: () =>
      import('./feature/customer-types/pages/customer-types-list/customer-types-list.component'),
  },
];
