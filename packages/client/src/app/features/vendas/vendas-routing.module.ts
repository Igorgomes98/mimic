import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasComponent } from './vendas.component';

const routes: Routes = [
  {
    path: '',
    component: VendasComponent
  },
  {
    path: 'nova',
    loadComponent: () => import('./pos/pos.component').then(m => m.PosComponent)
  },
  {
    path: 'scanner',
    loadComponent: () => import('./mobile-scanner/mobile-scanner.component').then(m => m.MobileScannerComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendasRoutingModule { }
