import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/product/pages/product-list/product-list.component'),
  },
];
