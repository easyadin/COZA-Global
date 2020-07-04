import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnexplorePageRoutingModule } from './onexplore-routing.module';

import { OnexplorePage } from './onexplore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnexplorePageRoutingModule
  ],
  declarations: [OnexplorePage]
})
export class OnexplorePageModule {}
