import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathNotePageRoutingModule } from './death-note-routing.module';

import { DeathNotePage } from './death-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathNotePageRoutingModule
  ],
  declarations: [DeathNotePage]
})
export class DeathNotePageModule {}
