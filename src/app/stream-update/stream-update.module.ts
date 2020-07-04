import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreamUpdatePageRoutingModule } from './stream-update-routing.module';

import { StreamUpdatePage } from './stream-update.page';

import { NewlivestreamPage } from './../newlivestream/newlivestream.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreamUpdatePageRoutingModule
  ],
  declarations: [StreamUpdatePage],
  entryComponents: [NewlivestreamPage]
})
export class StreamUpdatePageModule {}
