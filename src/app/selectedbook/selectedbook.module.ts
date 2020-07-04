import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedbookPageRoutingModule } from './selectedbook-routing.module';

import { SelectedbookPage } from './selectedbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedbookPageRoutingModule
  ],
  declarations: [SelectedbookPage]
})
export class SelectedbookPageModule {}
