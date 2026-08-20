import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/shell/shell.component'),
    children: [
      {
        path: 'dashboard',
        loadChildren: () => loadRemoteModule('dashboard-mfe', './routes').then((m) => m.routes),
      },
      {
        path: 'customers',
        loadChildren: () => loadRemoteModule('customer-mfe', './routes').then((m) => m.routes),
      },
      {
        path: 'sales',
        loadChildren: () => loadRemoteModule('sale-mfe', './routes').then((m) => m.routes),
      },
      {
        path: 'products',
        loadChildren: () => loadRemoteModule('product-mfe', './routes').then((m) => m.routes),
      },
    ],
  },
];
