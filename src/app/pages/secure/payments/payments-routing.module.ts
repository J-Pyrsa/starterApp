import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsPage } from './payments.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsPage
  },
  {
    path: 'payment-detail',
    loadChildren: () => import('./payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsPageRoutingModule {}
