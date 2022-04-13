import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByIdPage } from './by-id.page';

const routes: Routes = [
  {
    path: '',
    component: ByIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByIdPageRoutingModule {}
