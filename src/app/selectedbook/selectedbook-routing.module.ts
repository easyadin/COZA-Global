import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedbookPage } from './selectedbook.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedbookPageRoutingModule {}
