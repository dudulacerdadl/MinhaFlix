import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokyoGhoulPageRoutingModule } from './tokyo-ghoul-routing.module';

import { TokyoGhoulPage } from './tokyo-ghoul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokyoGhoulPageRoutingModule
  ],
  declarations: [TokyoGhoulPage]
})
export class TokyoGhoulPageModule {}
