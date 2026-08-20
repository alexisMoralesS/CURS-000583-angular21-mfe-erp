import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/sales/pages/sales-list/sales-list.component'),
  },
  {
    path: 'create',
    loadComponent: () => import('./feature/sales/pages/sales-create/sales-create.component'),
  },
];
