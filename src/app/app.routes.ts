import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Transactions } from './components/transactions/transactions';
import { Reports } from './components/reports/reports';
import { Properties } from './components/properties/properties';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'properties', component: Properties },
  { path: 'transactions', component: Transactions },
  { path: 'reports', component: Reports }
];
