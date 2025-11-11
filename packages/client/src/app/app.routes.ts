import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {path: '', redirectTo: '/app/dashboard', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('@features/auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: () => import('@features/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'vendas', loadChildren: () => import('@features/vendas/vendas.module').then(m => m.VendasModule)},
      {path: 'compras', loadChildren: () => import('@features/compras/compras.module').then(m => m.ComprasModule)},
      {path: 'produtos', loadChildren: () => import('@features/produtos/produtos.module').then(m => m.ProdutosModule)},
      {path: 'estoque', loadChildren: () => import('@features/estoque/estoque.module').then(m => m.EstoqueModule)},
      {path: 'clientes', loadChildren: () => import('@features/clientes/clientes.module').then(m => m.ClientesModule)},
      {path: 'fornecedores', loadChildren: () => import('@features/fornecedores/fornecedores.module').then(m => m.FornecedoresModule)},
    ]
  },
  {path: '**', redirectTo: '/app/dashboard'}
];
