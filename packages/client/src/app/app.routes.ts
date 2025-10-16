import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('@features/auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: () => import('@features/dashboard/dashboard.module').then(m => m.DashboardModule)},
      // Outras rotas protegidas serão adicionadas aqui
    ]
  },
  {path: '**', redirectTo: '/login'}
];
