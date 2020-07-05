import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivestreamPageRoutingModule } from './livestream-routing.module';

import { LivestreamPage } from './livestream.page';

import 'gl-ionic-background-video';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivestreamPageRoutingModule,
  ],
  declarations: [LivestreamPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LivestreamPageModule { }
