import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokyoGhoulPage } from './tokyo-ghoul.page';

const routes: Routes = [
  {
    path: '',
    component: TokyoGhoulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokyoGhoulPageRoutingModule {}
