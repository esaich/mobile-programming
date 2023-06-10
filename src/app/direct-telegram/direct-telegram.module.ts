import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectTelegramPageRoutingModule } from './direct-telegram-routing.module';

import { DirectTelegramPage } from './direct-telegram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectTelegramPageRoutingModule
  ],
  declarations: [DirectTelegramPage]
})
export class DirectTelegramPageModule {}
