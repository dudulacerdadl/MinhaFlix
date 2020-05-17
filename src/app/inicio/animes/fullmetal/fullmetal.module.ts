import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullmetalPageRoutingModule } from './fullmetal-routing.module';

import { FullmetalPage } from './fullmetal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullmetalPageRoutingModule
  ],
  declarations: [FullmetalPage]
})
export class FullmetalPageModule {}
