import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectWhatsAppPage } from './direct-whats-app.page';

const routes: Routes = [
  {
    path: '',
    component: DirectWhatsAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectWhatsAppPageRoutingModule {}
