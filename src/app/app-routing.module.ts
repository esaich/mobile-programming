import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'direct-whats-app',
    loadChildren: () => import('./direct-whats-app/direct-whats-app.module').then( m => m.DirectWhatsAppPageModule)
  },
  {
    path: 'direct-telegram',
    loadChildren: () => import('./direct-telegram/direct-telegram.module').then( m => m.DirectTelegramPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
