import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectTelegramPage } from './direct-telegram.page';

const routes: Routes = [
  {
    path: '',
    component: DirectTelegramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectTelegramPageRoutingModule {}
