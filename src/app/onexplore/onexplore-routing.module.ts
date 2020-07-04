import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnexplorePage } from './onexplore.page';

const routes: Routes = [
  {
    path: '',
    component: OnexplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnexplorePageRoutingModule {}
