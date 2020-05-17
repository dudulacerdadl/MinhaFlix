import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeathNotePage } from './death-note.page';

const routes: Routes = [
  {
    path: '',
    component: DeathNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeathNotePageRoutingModule {}
