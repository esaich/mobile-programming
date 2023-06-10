import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectWhatsAppPageRoutingModule } from './direct-whats-app-routing.module';

import { DirectWhatsAppPage } from './direct-whats-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectWhatsAppPageRoutingModule
  ],
  declarations: [DirectWhatsAppPage]
})
export class DirectWhatsAppPageModule {}
